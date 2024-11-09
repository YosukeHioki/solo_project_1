const todoModel = require("./todoModel");

module.exports = {
  async all(req, res) {
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
    console.log("foundTodo----------", foundTodo);
    if (foundTodo !== undefined) {
      res.status(200).send({ data: foundTodo });
    } else {
      res.status(400).json({ error: "Not found." });
    }
  },

  async getByLimitDate(req, res) {
    console.log("req----------------", req);
    const limitDate = req.params.limit_date;
    console.log("limitedDate", limitDate);
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
    // const reqTodo = {
    //   todo: "meeting with team",
    //   genre: "work",
    //   limit_date: "2024-11-20",
    //   status: "incomplete",
    // };
    console.log(reqTodo);
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
    const updatedTodo = await todoModel.deleteTodoData(reqTodo);
    if ((await todoModel.getTodoById(reqTodo.id)) !== undefined) {
      res.status(200).send(updatedTodo);
    } else {
      res.status(500).json({ error: "Could not delete." });
    }
  },
};
