exports.seed = async knex => {
  await knex("products").truncate();
  await knex("categories").truncate();
  await knex("commodities").truncate();
};
