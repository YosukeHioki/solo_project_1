require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const environment = process.env.NODE_ENV;

const express = require("express");
const app = express();
app.use(express.json());
const todoController = require("./db/todoController");

// todoテーブルの全てのデータを取得
app.get("/id/:id/", todoController.getById);
app.get("/", todoController.all); //動作せず！！！

//サーバ起動
app.listen(PORT, () => {
  if (environment === "development") {
    console.log(`Local server is running: http://localhost:${PORT}`);
  } else {
    console.log(`Web server is running: PORT NO.${PORT}`);
  }
});
