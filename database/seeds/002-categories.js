exports.seed = async knex => {
  await knex("categories").insert([
    {
      name: "Livestock",
      commodity_id: 1
    },
    {
      name: "Fruits",
      commodity_id: 2
    },
    {
      name: "Vegetables",
      commodity_id: 2
    }
  ]);
};
