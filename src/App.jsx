import * as React from "react";
import { Card } from "@mui/material";
import { useState, useEffect, createContext, useContext } from "react";

import { MainButtons } from "./components/MainButtons";
import { NewTodoInput } from "./components/NewTodoInput";
import { NewTodoGenreToggleButton } from "./components/NewTodoGenreToggleButton";
import { NewTodoLimitDateCalendar } from "./components/NewTodoLimitDateCalendar";
import { CompletedTodos } from "./components/CompletedTodos";
import { UncompletedTodos } from "./components/UncompletedTodos";

import "./style.css";

export function App() {
  //状態定義
  const [todo, setTodo] = useState(""); //入力内容
  const [genre, setGenre] = useState(""); //選択されたジャンル
  const [limitDate, setLimitDate] = useState(""); //選択された期限の年月日
  const [todoData, setTodoData] = useState({}); //入力された全てのデータをオブジェクトで保持
  const [display, setDisplay] = useState("none"); //新規作成カードの表示・非表示
  const [completedTodos, setCompletedTodos] = useState([]); //完了したデータ
  const [uncompletedTodos, setUncompletedTodos] = useState([]); //未完了のデータ
  const [isCompleted, setIsCompleted] = useState(false); //未完了データ画面かどうか

  //完了したデータを取得
  useEffect(() => {
    fetch("/api/completedTodos")
      .then((fetchData) => fetchData.json())
      .then((jsonData) => {
        setCompletedTodos(jsonData.data);
      });
  }, []);
  // 未完了のデータを取得
  useEffect(() => {
    fetch("/api/uncompletedTodos")
      .then((fetchData) => fetchData.json())
      .then((jsonData) => {
        setUncompletedTodos(jsonData.data);
      });
  }, []);

  //NewTodoで必要情報が入力されたらそのデータをオブジェクトのプロパティの値として入れる
  useEffect(() => {
    if (todo !== "" && genre !== "" && limitDate !== "") {
      setTodoData({
        todo: todo,
        genre: genre,
        limit_date: limitDate,
        status: "incomplete",
      });
    }
  }, [todo, genre, limitDate]);

  //NewTodoのジャンル選択のラジオボタンでどちらが選択されたかを取得
  function getRadioButton() {
    const getGenre = document.getElementById("todo-genre");
    return getGenre.genre.value;
  }

  // NewTodoでPOSTして、サーバ側の処理の成否でメッセージを変える処理
  async function addNewTodo() {
    const response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoData),
    });
    if (response.status === 200) {
      window.alert("新しいTodoが作成されました！");
      window.location.reload();
    } else {
      window.alert("Todo作成に失敗しました、再度試してください。");
    }
  }

  return (
    <div className={"main-container"}>
      {/*ヘッダー・選択ボタン*/}
      <MainButtons setDisplay={setDisplay} setIsCompleted={setIsCompleted} />
      {/*新しくTodoを作成*/}
      <Card
        className="new-todo"
        style={{
          display,
        }}
      >
        {/*内容入力欄*/}
        <NewTodoInput setTodo={setTodo} />
        {/*ジャンル入力トグルボタン*/}
        <NewTodoGenreToggleButton
          setGenre={setGenre}
          getRadioButton={getRadioButton}
        />
        {/*締切日の選択カレンダー*/}
        <NewTodoLimitDateCalendar
          setLimitDate={setLimitDate}
          addNewTodo={addNewTodo}
          todo={todo}
          genre={genre}
          limitDate={limitDate}
          setDisplay={setDisplay}
        />
      </Card>
      {/*登録済みTodoリストを表示*/}
      <div className={"todo-list"}>
        {!isCompleted ? (
          <UncompletedTodos uncompletedTodos={uncompletedTodos} />
        ) : (
          <CompletedTodos completedTodos={completedTodos} />
        )}
      </div>
    </div>
  );
}
