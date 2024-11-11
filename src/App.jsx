import React from "react";
import { useState, useEffect } from "react";
import { MainButtons } from "./components/MainButtons";
import { NewTodoInput } from "./components/NewTodoInput";
import { NewTodoGenreToggleButton } from "./components/NewTodoGenreToggleButton";
import { NewTodoLimitDateCalendar } from "./components/NewTodoLimitDateCalendar";
import { NewTodo } from "./components/NewTodo";

export function App() {
  //状態定義
  const [todo, setTodo] = useState(""); //入力内容
  const [genre, setGenre] = useState(""); //選択されたジャンル
  const [limitDate, setLimitDate] = useState(""); //選択された期限の年月日
  const [todoData, setTodoData] = useState({}); //入力された全てのデータをオブジェクトで保持
  const [completedTodos, setCompletedTodos] = useState([]); //完了したデータ
  const [uncompletedTodos, setUncompletedTodos] = useState([]); //未完了のデータ

  //完了したデータと未完了のデータをそれぞれ取得
  useEffect(() => {
    fetch("/get/completedTodos")
      .then((fetchData) => fetchData.json())
      .then((jsonData) => {
        setCompletedTodos(jsonData.data);
      });
  }, []);
  useEffect(() => {
    fetch("/get/uncompletedTodos")
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

  return (
    <>
      <NewTodo
        setTodo={setTodo}
        setGenre={setGenre}
        getRadioButton={getRadioButton}
        setLimitDate={setLimitDate}
      />
    </>
  );
}

//POST確認用
async function addNewTodo() {
  const newTodo = {
    todo: "meeting with team member",
    genre: "work",
    limit_date: "2024-11-20",
    status: "incomplete",
  };
  const response = await fetch("/", {
    method: "POST",
    body: newTodo,
  });
}

// async function addNewTodo() {
//   const newTodo = {
//     todo: "meeting with team member",
//     genre: "work",
//     limit_date: "2024-11-20",
//     status: "incomplete",
//   };
//   const response = await fetch("/", {
//     method: "POST",
//     body: newTodo,
//   });
// }
// addNewTodo();


//データ広範で利用時はjotaiで管理
// import { atom, useAtom } from "jotai";

// const todo = atom("");
// const [todoAtom, setTodoAtom] = useAtom(todo);
// const genre = atom("");
// const [genreAtom, setGenreAtom] = useAtom(genre);
// const limitDate = atom("");
// const [limitDateAtom, setLimitDateAtom] = useAtom(limitDate);
// setLimitDateAtom(limitYearAtom + "-" + limitMonthAtom + "-" + limitDayAtom);
// console.log(limitDateAtom);
// const todoLimitDate = atom
