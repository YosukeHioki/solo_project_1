const environment = process.env.NODE_ENV;
const config = require("../knexfile")[environment];
const knex = require("knex")(config);

const TODO_TABLE = "todo";

module.exports = {
  TODO_TABLE,
  //get
  /**
   * @param {number} limit - todoテーブルで取得するデータ数上限
   * @return {Promise<Array>} - 全てのtodoデータ
   */
  async getAllTodos(limit = 10) {
    return await knex.select("*").from(TODO_TABLE).limit(limit);
  },
  /**
   * @param {number} id - todoテーブルで取得する対象のid
   * @return {Promise<object | undefined>} - idに合致したtodoデータ、無ければundefined
   */
  async getTodoById(id) {
    return await knex.table(TODO_TABLE).first("*").where({ id });
  },

  /**
   * @param {"string"} limitDate - todoテーブルで取得するlimit_date列の始点となる日付
   * @return {Promise<Array>} - limit_date列がlimitDateよりも新しい日付の全てのtodoデータ
   */
  async getTodoByLimitDate(limitDate) {
    return await knex
      .select("*")
      .from(TODO_TABLE)
      .where("limit_date", ">=", limitDate);
  },

  /**
   * @param {number} limit - todoテーブルで取得するデータ数上限
   * @return {Promise<Array>} - 全ての完了しているtodoデータ
   */
  async getCompletedTodos(limit = 10) {
    return await knex
      .select("*")
      .from(TODO_TABLE)
      .where({ status: "complete" })
      .limit(limit);
  },

  /**
   * @param {number} limit - todoテーブルで取得するデータ数上限
   * @return {Promise<Array>} - 全ての未完了のtodoデータ
   */
  async getUncompletedTodos(limit = 10) {
    return await knex
      .select("*")
      .from(TODO_TABLE)
      .where({ status: "incomplete" })
      .limit(limit);
  },

  //insert
  /**
   * @param {object} todoData - 追加するtodoデータ
   * @return {Promise<Array>} - 追加後の全てのtodoデータ
   */
  async addNewTodoData(todoData) {
    await knex.table(TODO_TABLE).insert(todoData);
  },

  //update
  /**
   * @param {object} todoData - 更新するtodoデータ
   * @return {Promise<Array>} - 更新後の全てのtodoデータ
   */
  async updateTodoData(todoData) {
    await knex.table(TODO_TABLE).where({ id: todoData.id }).update(todoData);
    return await this.getTodoById(todoData.id);
  },

  //delete
  /**
   * @param {object} todoData - 削除するtodoデータ
   * @return {Promise<Array>} - 削除したtodoデータ
   */
  async deleteTodoData(todoData) {
    const deleteTargetTodo = this.getTodoById(todoData.id);
    await knex.table(TODO_TABLE).where({ id: todoData.id }).del();
    console.log((await this.getTodoById(todoData.id)) === undefined);
    if ((await this.getTodoById(todoData.id)) === undefined)
      return deleteTargetTodo;
  },
};
