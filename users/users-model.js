const db = require("../database/dbConfig.js");
const bcrypt = require("bcryptjs");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14);

  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}
