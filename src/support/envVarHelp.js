/**
 * Returns the value of the given environment variable, or throws an error if it does not exist.
 * @param {string} envVarKey key of environment variable to obtain
 */
function getEnvVarOrFail(envVarKey) {
    const foundValue = process.env[envVarKey];
    if (!foundValue) {
        throw new Error(
            `Missing expected env var ${envVarKey}.  Have you set it in an .env file or via host UI?`,
        );
    }
    return foundValue;
}
module.exports = { getEnvVarOrFail };
