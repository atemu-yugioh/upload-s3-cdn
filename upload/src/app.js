const compression = require("compression");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const express = require("express");

const app = express();

// init middleware
app.use(compression());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init database
require("./dbs/mongodb.init");

// init routes
app.use("/api/v1", require("./routes"));

// handle erro 404
app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  next(error);
});

// handle error throw
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message: error.message || "Internal server error!",
  });
});

module.exports = app;
