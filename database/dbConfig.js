const knex = require("knex");
const knexfile = require("../knexfile");

const environment = process.env.NODE_ENV || "development";
const production = process.env.NODE_ENV || "production";

module.exports = knex(knexfile[environment]);
