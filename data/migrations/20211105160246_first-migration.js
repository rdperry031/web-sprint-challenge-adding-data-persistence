exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments();
    })
    .createTable("resources", (table) => {
      table.increments();
    })
    .createTable("tasks", (table) => {
      table.increments();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
 