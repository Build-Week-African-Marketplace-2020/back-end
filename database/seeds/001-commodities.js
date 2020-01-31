exports.seed = async knex => {
  await knex("commodities").insert([
    { name: "Animal Products" },
    { name: "Fresh Produce" }
  ]);
};
