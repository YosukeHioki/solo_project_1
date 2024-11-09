/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('todo', function (table) {
        table.increments('id').primary();
        table
            .string('todo', 64)
            .notNullable()
        table.string('genre', 64).notNullable();
        table.date('limit_date').notNullable();
        table.string('status', 64).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('todo');
};