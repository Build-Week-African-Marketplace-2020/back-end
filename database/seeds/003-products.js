exports.seed = async knex => {
  await knex("products").insert([
    { name: "Pork", location: "Kenya", price: "10", category_id: 1 },
    { name: "Beef", location: "Uganda", price: "5", category_id: 1 },
    { name: "Chicken", location: "Rwanda", price: "7", category_id: 1 },
    { name: "Apples", location: "Kenya", price: "2", category_id: 2 },
    { name: "Bananas", location: "Uganda", price: "2", category_id: 2 },
    { name: "Strawberries", location: "Rwanda", price: "4", category_id: 2 },
    { name: "Lettuce", location: "Kenya", price: "3", category_id: 3 },
    { name: "Tomatos", location: "Uganda", price: "1", category_id: 3 },
    { name: "Potatos", location: "Rwanda", price: "1", category_id: 3 }
  ]);
};
