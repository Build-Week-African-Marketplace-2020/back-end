const express = require("express");

const configureMiddleware = require("./middleware");
const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const mpRouter = require("../marketplace/marketplace-router");

const server = express();

configureMiddleware(server);

server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/mp", mpRouter);

server.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to our API"
  });
});

server.use((err, req, res, next) => {
  console.log("Error:", err);

  res.status(500).json({
    message: "Something went wrong"
  });
});

module.exports = server;
