import React from "react";
import { useState, useEffect, createContext, useContext } from "react";
import { atom, useAtom } from "jotai";

// import { NewTodo } from "./components/NewTodo";
import { MainButtons } from "./components/MainButtons";
import { NewTodoInput } from "./components/NewTodoInput";
import { NewTodoGenreToggleButton } from "./components/NewTodoGenreToggleButton";
import { NewTodoLimitDateCalendar } from "./components/NewTodoLimitDateCalendar";
import { CompletedTodos } from "./components/CompletedTodos";
import { UncompletedTodos } from "./components/UncompletedTodos";

export function App() {
  //状態定義
  const [todo, setTodo] = useState(""); //入力内容
  const [genre, setGenre] = useState(""); //選択されたジャンル
  const [limitDate, setLimitDate] = useState(""); //選択された期限の年月日
  const [todoData, setTodoData] = useState({}); //入力された全てのデータをオブジェクトで保持

  const [completedTodos, setCompletedTodos] = useState([]); //完了したデータ
  const [uncompletedTodos, setUncompletedTodos] = useState([]); //未完了のデータ
  const [isCompleted, setIsCompleted] = useState(true); //未完了データ画面かどうか

  // const completedContext = createContext([]);
  // const [completedTodos, setCompletedTodos] = useContext(completedContext); //完了したデータ
  // const uncompletedContext = createContext([]);
  // const [uncompletedTodos, setUncompletedTodos] =
  //   useContext(uncompletedContext); //未完了のデータ
  // const isCompletedContext = createContext("true");
  // const [isCompletedData, setIsCompletedData] = useContext(isCompletedContext); //完了データ画面かどうか

  //完了したデータと未完了のデータをそれぞれ取得
  useEffect(() => {
    fetch("/api/completedTodos")
      .then((fetchData) => fetchData.json())
      .then((jsonData) => {
        setCompletedTodos(jsonData.data);
      });
  }, []);
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

  // NewTodoでPOSTして、insertの成否でメッセージを変える処理
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

  // uncompletedTodosから対象のデータをDELETEするため処理
  async function deleteTodo() {
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

  return (
    <>
      {/*新しくTodoを作成*/}
      <div>
        {/*ヘッダー・選択ボタン*/}
        <MainButtons setIsCompleted={setIsCompleted} />
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
        />
      </div>

      <div>
        {!isCompleted ? (
          <UncompletedTodos uncompletedTodos={uncompletedTodos} />
        ) : (
          <CompletedTodos completedTodos={completedTodos} />
        )}
      </div>
    </>
  );
}

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
