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

  // uncompletedTodosから対象のデータをDELETEするため処理
  async function deleteTodo(todoData) {
    setId(todoData.id);
    // setTodo(todoData.todo);
    // setGenre(todoData.genre);
    // setLimitDate(todoData.limit_date);
    // setStatus(todoData.status);

    const response = await fetch("/api", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoData),
    });
    if (response.status === 200) {
      window.alert("選択されたTodoは削除されました！");
      window.location.reload();
    } else {
      window.alert("選択されたTodoの削除に失敗しました、再度試してください。");
    }
  }

  return uncompletedTodos.map((todoData, index) => {
    const limitDate = moment(todo.limit_date);
    const formattedLimitDate = limitDate.format("YY/MM/DD");
    return (
      <div
        key={index}
        style={{ backgroundColor: "orange", marginBottom: "1%" }}
      >
        <h2>{todoData.status}</h2>
        <div>todo : {todoData.todo}</div>
        <div>genre : {todoData.genre}</div>
        <div>limit_date : {formattedLimitDate}</div>
        <div>(id : {todoData.id})</div>
        <div style={{ display: "flex" }}>
          <button>Complete</button>
          <button>Edit</button>
          <button
            onClick={async () => {
              await deleteTodo(todoData);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
}
