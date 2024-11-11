require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const environment = process.env.NODE_ENV;

const express = require("express");
const app = express();
app.use(express.json());
app.use("/", express.static("./dist"));
// app.use((req, res) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
// });
const todoController = require("./db/todoController");

function setupServer() {
  //todoデータ取得
  app.get("/get/uncompletedTodos", todoController.getUncompleted);
  app.get("/get/completedTodos", todoController.getCompleted);
  app.get("/get/limit_date/:limit_date", todoController.getByLimitDate);
  app.get("/get/id/:id/", todoController.getById);
  app.get("/data", todoController.all);

  // //todoデータ追加、動作せず
  // app.post("/post", todoController.addNew);
  //
  // //todoデータ更新、動作せず
  // app.patch("/patch", todoController.update);
  //
  // //todoデータ削除、動作せず
  // app.delete("/delete", todoController.delete);
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
