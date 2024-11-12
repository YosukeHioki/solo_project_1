require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const environment = process.env.NODE_ENV;

const express = require("express");
const app = express();
app.use(express.json());
app.use("/", express.static("./dist"));
const todoController = require("./db/todoController");

function setupServer() {
  //todoデータ取得
  app.get("/api/uncompletedTodos", todoController.getUncompleted);
  app.get("/api/completedTodos", todoController.getCompleted);
  app.get("/api/limit_date/:limit_date", todoController.getByLimitDate);
  app.get("/api/id/:id", todoController.getById);
  app.get("/api/allData", todoController.getAll);

  //todoデータ追加
  app.post("/api", todoController.addNew);

  //todoデータ更新、未確認！！！
  app.patch("/api", todoController.update);

  //todoデータ削除
  app.delete("/api", todoController.delete);
  return app;
}

setupServer();

//サーバ起動
app.listen(PORT, () => {
  if (environment === "development") {
    console.log(`Local server is running: http://localhost:${PORT}`);
  } else {
    console.log(`Web server is running: PORT NO.${PORT}`);
  }
});
