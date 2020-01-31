exports.up = async knex => {
  await knex.schema.createTable("users", users => {
    users.increments();
    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("first_name").notNullable();
    users.string("last_name").notNullable();
    users.string("password", 128).notNullable();
  });

  await knex.schema.createTable("commodities", table => {
    table.increments("id");
    table.string("name").notNullable();
  });

  await knex.schema.createTable("categories", table => {
    table.increments("id");
    table.string("name").notNullable();
    table
      .integer("commodity_id")
      .notNullable()
      .references("id")
      .inTable("commodities")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("products", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("location");
    table.float("price");
    table
      .integer("category_id")
      .notNullable()
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

// exports.down = async knex => {
//   await knex.schema.dropTableIfExists("products");
//   await knex.schema.dropTableIfExists("categories");
//   await knex.schema.dropTableIfExists("commodities");
//   await knex.schema.dropTableIfExists("users");
// };

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("products")
    .dropTableIfExists("categories")
    .dropTableIfExists("commodities")
    .dropTableIfExists("users");
};
