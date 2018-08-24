exports.up = function(knex, Promise) {
  return knex.schema.createTable("todo", (table) => {
    table.increments("id");
    table.string("task").notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("todo");
};
