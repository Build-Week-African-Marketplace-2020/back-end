exports.seed = async knex => {
  await knex("categories").insert([
    { name: "Animal Products" },
    { name: "Vegetable Products" }
  ]);
};
