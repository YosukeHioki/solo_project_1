import React, { useEffect, useState } from "react";
import moment from "moment";
import { UncompletedTodosList } from "./UncompletedTodosList";
import { EditMode } from "./EditMode";

export function UncompletedTodos({ uncompletedTodos }) {
  const [id, setId] = useState(0); //取得したid
  const [todo, setTodo] = useState(""); //入力内容
  const [genre, setGenre] = useState(""); //選択されたジャンル
  const [limitDate, setLimitDate] = useState(""); //選択された期限の年月日
  const [status, setStatus] = useState(""); //完了・未完了の状態
  const [todoData, setTodoData] = useState({}); //入力された全てのデータをオブジェクトで保持
  const [isEditMode, setIsEditMode] = useState(false); // 編集モードかリスト表示か

  //値に変化があった時にtodoDataも変化させる
  useEffect(() => {
    setTodoData({
      id: id,
      todo: todo,
      genre: genre,
      limit_date: limitDate,
      status: status,
    });
  }, [id, todo, genre, limitDate, status]);

  //編集時に対象のTodoの値を取得する関数
  function setAllStates(data) {
    setId(data.id);
    setTodo(data.todo);
    setGenre(data.genre);
    setLimitDate(data.limit_date);
    setStatus(data.status);
    setTodoData({
      id: data.id,
      todo: data.todo,
      genre: data.genre,
      limit_date: data.limitDate,
      status: data.status,
    });
    setIsEditMode(true);
  }

  //COMPLETEを選択したTodoのステータスを完了状態に変更する処理
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

  //EDITを選択したTodoのデータを更新する処理
  async function updateTodo(data) {
    const response = await fetch("/api", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      window.alert("選択されたTodoを更新しました！");
      window.location.reload();
    } else {
      window.alert(
        "選択されたTodoを更新できませんでした、再度お試しください。",
      );
    }
  }

  //DELETEを選択したTodoのデータを削除するための処理
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

  // DOM生成

  return (
    <div className={"view-or-edit"}>
      {!isEditMode ? (
        <UncompletedTodosList
          uncompletedTodos={uncompletedTodos}
          changeStatus={changeStatus}
          deleteTodo={deleteTodo}
          setIsEditMode={setIsEditMode}
          setAllStates={setAllStates}
        />
      ) : (
        <EditMode
          setTodo={setTodo}
          todoData={todoData}
          setGenre={setGenre}
          setLimitDate={setLimitDate}
          setAllStates={setAllStates}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
}
