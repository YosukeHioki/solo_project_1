const todoModel = require("./todoModel");

module.exports = {
  async getAll(req, res) {
    const limit = req.query.limit;
    const allTodo = await todoModel.getAllTodos(limit);
    if (allTodo !== undefined) {
      res.status(200).send({ data: allTodo });
    } else {
      res.status(500).json({ error: "Could not get todo data." });
    }
  },

  async getById(req, res) {
    const todoId = req.params.id;
    const foundTodo = await todoModel.getTodoById(todoId);
    if (foundTodo !== undefined) {
      res.status(200).send({ data: foundTodo });
    } else {
      res.status(400).json({ error: "Not found." });
    }
  },

  async getByLimitDate(req, res) {
    const limitDate = req.params.limit_date;
    const foundTodo = await todoModel.getTodoByLimitDate(limitDate);
    if (foundTodo !== undefined) {
      res.status(200).send({ data: foundTodo });
    } else {
      res.status(400).json({ error: "Not found." });
    }
  },

  async getCompleted(req, res) {
    const limit = req.query.limit;
    const foundTodos = await todoModel.getCompletedTodos(limit);
    if (foundTodos !== undefined || [foundTodos].length !== 0) {
      res.status(200).send({ data: foundTodos });
    } else if (foundTodos.length === 0) {
      res.status(200).send("No data");
    } else {
      res.status(500).json({ error: "Could not get todo data." });
    }
  },

  async getUncompleted(req, res) {
    const limit = req.query.limit;
    const foundTodos = await todoModel.getUncompletedTodos(limit);
    if (foundTodos !== undefined || [foundTodos].length !== 0) {
      res.status(200).send({ data: foundTodos });
    } else if (foundTodos.length === 0) {
      res.status(200).send("No data");
    } else {
      res.status(500).json({ error: "Could not get todo data." });
    }
  },

  async addNew(req, res) {
    const reqTodo = req.body;
    const addedTodo = await todoModel.addNewTodoData(reqTodo);
    res.status(200).send(addedTodo);
  },

  async update(req, res) {
    const reqTodo = req.body;
    const updatedTodo = await todoModel.updateTodoData(reqTodo);
    res.status(200).send(updatedTodo);
  },

  async delete(req, res) {
    const reqTodo = req.body;
    console.log("reqTodo----", reqTodo);
    const deletedTodo = await todoModel.deleteTodoData(reqTodo);
    if ((await todoModel.getTodoById(reqTodo.id)) === undefined) {
      res.status(200).send("Success to delete.");
    } else {
      res.status(500).json({ error: "Could not delete." });
    }
  },
};
