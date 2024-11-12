import React, { useEffect, useState } from "react";
import moment from "moment";

export function UncompletedTodos({ uncompletedTodos }) {
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState(""); //入力内容
  const [genre, setGenre] = useState(""); //選択されたジャンル
  const [limitDate, setLimitDate] = useState(""); //選択された期限の年月日
  const [status, setStatus] = useState("");
  const [todoData, setTodoData] = useState({}); //入力された全てのデータをオブジェクトで保持

  useEffect(() => {
    setTodoData({
      id: id,
      todo: todo,
      genre: genre,
      limit_date: limitDate,
      status: status,
    });
  }, [id, todo, genre, limitDate, status]);

  async function changeStatus(data) {
    data.status = "complete";
    const response = await fetch("/api", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      window.alert("選択されたTodoを完了状態に変更しました！");
      window.location.reload();
    } else {
      window.alert(
        "選択されたTodoを完了状態に変更できませんでした、再度お試しください。",
      );
    }
  }

  // uncompletedTodosから対象のデータをDELETEするための処理
  async function deleteTodo(data) {
    const response = await fetch("/api", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      window.alert("選択されたTodoは削除されました！");
      window.location.reload();
    } else {
      window.alert("選択されたTodoの削除に失敗しました、再度お試しください。");
    }
  }

  return uncompletedTodos.map((uncompletedTodo, index) => {
    const limitDate = moment(uncompletedTodo.limit_date);
    const formattedLimitDate = limitDate.format("YY/MM/DD");
    return (
      <div
        key={index}
        style={{ backgroundColor: "orange", marginBottom: "1%" }}
      >
        <h2>{uncompletedTodo.status}</h2>
        <div>todo : {uncompletedTodo.todo}</div>
        <div>genre : {uncompletedTodo.genre}</div>
        <div>limit_date : {formattedLimitDate}</div>
        <div>(id : {uncompletedTodo.id})</div>
        <div style={{ display: "flex" }}>
          <button
            onClick={async () => {
              await changeStatus(uncompletedTodo);
            }}
          >
            Complete
          </button>
          <button>Edit</button>
          <button
            onClick={async () => {
              await deleteTodo(uncompletedTodo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
}
