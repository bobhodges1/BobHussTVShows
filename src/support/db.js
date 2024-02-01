const { Pool } = require("pg");
const { getEnvVarOrFail } = require("./envVarHelp");

/**
 * A small pool of connections to the database specified in the env var `DATABASE_URL`
 * @see https://node-postgres.com/apis/pool
 */
const pool = new Pool({
    connectionString: getEnvVarOrFail("DATABASE_URL"),
    max: 2, //keep this low. elephantSQL doesn't let you have a lot of connections for free.
});

/**
 * Promises to execute the given SQL query, optionally using any given values in place of placeholders $1, $2, etc.
 *
 * @param {string} sql The SQL query to execute
 * @param {any[]} values
 * 
 * Note: Returns a promise - you'll need to `await` its resolution, or schedule a subsequent function with `.then()`
 *
 * Note: Don't use this for multi-query transactions - see https://node-postgres.com/apis/pool#poolquery

 */
async function query(sql, values = []) {
    console.log("running sql: ", sql);
    const dbResult = await pool.query(sql, values);
    console.log(
        `Queried db and got : ${dbResult.rowCount} row(s).  SQL was:  ${sql}`,
    );
    return dbResult;
}
module.exports = { pool, query };
