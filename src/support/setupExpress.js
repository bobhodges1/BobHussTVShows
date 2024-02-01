const express = require("express");
const { connectLiveReload } = require("./liveReloadSupport");
require("dotenv").config(); //load key-value pairs from any .env files into process.env
const cors = require("cors");
const session = require("express-session");
const { getEnvVarOrFail } = require("./envVarHelp");
const morgan = require("morgan");

const app = express();

//any requests for files which are found in public will be served.  e.g. /index.html will serve from /oublic/index.html
app.use(express.static("public"));
app.use(morgan("dev"));
app.set("view engine", "ejs");

//parse any form content from request body (application/x-www-form-urlencoded), making available as req.body
app.use(express.urlencoded({ extended: false }));

//auto-include CORS headers to allow consumption of our content by in-browser js loaded from elsewhere
app.use(cors());

app.use(
    session({
        secret: getEnvVarOrFail("SESSION_SECRET"),
        resave: false,
        saveUninitialized: false,
    }),
);

console.log("process.env.NODE_ENV is " + process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production") {
    console.log("Enabling live-reloading of html pages on file save.");
    app.use(connectLiveReload());
}

module.exports = { app };
