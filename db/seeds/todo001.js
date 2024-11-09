/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    {id: 1, todo: 'typing', genre: "work", limit_date: "2024-11-11", status: "incomplete" }
  ]);
};
