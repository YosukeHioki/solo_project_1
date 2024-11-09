const todoModel = require("./todoModel");

module.exports = {
  async all(req, res) {
    const allTodo = await todoModel.getAllTodos();
    if (allTodo !== undefined) {
      res.status(200).send({ data: allTodo });
    } else {
      res.status(500);
      res.json({ error: "Could not get todo data." });
    }
  },

  async getById(req, res) {
    const todoId = req.params.id;
    const [foundTodo] = await todoModel.getTodoById(todoId);
    if (foundTodo !== undefined) {
      res.status(200).send({ data: foundTodo });
    } else {
      res.status(400);
      res.json({ error: "Not found." });
    }
  },

  async getByLimitDate(req, res) {
    const limitDate = req.params.limit_date;
    const [foundTodo] = await todoModel.getTodoByLimitDate(limitDate);
    if (foundTodo !== undefined) {
      res.status(200).send({ data: foundTodo });
    } else {
      res.status(400);
      res.json({ error: "Not found." });
    }
  },

  async getCompleted(req, res) {
    const [foundTodos] = await todoModel.getCompletedTodos();
    if (foundTodos !== undefined || [foundTodos].length !== 0) {
      res.status(200).send({ data: foundTodos });
    } else if ([foundTodos].length === 0) {
      res.status(200).send("No data");
    } else {
      res.status(500);
      res.json({ error: "Could not get todo data." });
    }
  },

  async getUncompleted(req, res) {
    const [foundTodos] = await todoModel.getUncompletedTodos();
    if (foundTodos !== undefined || [foundTodos].length !== 0) {
      res.status(200).send({ data: foundTodos });
    } else if ([foundTodos].length === 0) {
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

  async updated(req, res) {
    const reqTodo = req.body;
    const updatedTodo = await todoModel.updateTodoData(reqTodo);
    res.status(200).send(updatedTodo);
  },

  async delete(req, res) {
    const reqTodo = req.body;
    const updatedTodo = await todoModel.deleteTodoData(reqTodo);
    if ((await todoModel.getTodoById(reqTodo.id)) !== undefined) {
      res.status(200).send(updatedTodo);
    } else {
      res.status(500).json({ error: "Could not delete." });
    }
  },
};
