/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("todo").del();
  await knex("todo").insert([
    {
      id: 1,
      todo: "typing",
      genre: "work",
      limit_date: "2024-11-11",
      status: "incomplete",
    },
    {
      id: 2,
      todo: "buy keyboard",
      genre: "private",
      limit_date: "2024-11-12",
      status: "complete",
    },
    {
      id: 3,
      todo: "buy display",
      genre: "private",
      limit_date: "2024-11-12",
      status: "complete",
    },
    {
      id: 4,
      todo: "meeting with boss",
      genre: "work",
      limit_date: "2024-11-18",
      status: "incomplete",
    },
  ]);
};