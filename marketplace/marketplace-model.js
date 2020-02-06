const db = require("../database/dbConfig");

function findById(id) {
  return db("products")
    .where({ id })
    .first();
}

async function update(id, body) {
  await db("products")
    .where({ id })
    .update(body);

  return findById(id);
}

function remove(id) {
  return db("products")
    .where({ id })
    .del();
}

module.exports = {
  findById,
  update,
  remove
};
