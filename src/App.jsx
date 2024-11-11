import React from "react";
import { useState, useEffect } from "react";

export async function getDatabase() {
  return await fetch("http://localhost:3000/data").then((data) => {
    console.log("data--------------", data);
  });
}

getDatabase();

// import { atom, useAtom } from "jotai";

export function App() {
  const [todo, setTodo] = useState("");
  const [genre, setGenre] = useState("");
  const [limitDate, setLimitDate] = useState("");
  const [todoData, setTodoData] = useState({});

  useEffect(() => {
    if (todo !== "" && genre !== "" && limitDate !== "") {
      setTodoData({
        todo: todo,
        genre: genre,
        limit_date: limitDate,
        status: "incomplete",
      });
    }
    console.log("todoData------------", todoData);
  }, [todo, genre, limitDate]);

  function getRadioButton() {
    const getGenre = document.getElementById("todo-genre");
    return getGenre.genre.value;
  }

  return (
    <>
      {/*タイトル*/}
      <h1>Todo Card</h1>
      {/*内容入力欄*/}
      <div className={"todo-input"} style={{ justifyContent: "center" }}>
        <div>Todo</div>
        <input
          type={"text"}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        {/*ジャンル入力トグルボタン*/}
        <div>Genre</div>
        <form
          id={"todo-genre"}
          style={{ display: "flex " }}
          onChange={() => {
            setGenre(getRadioButton());
          }}
        >
          <div>
            <input type={"radio"} name={"genre"} value={"work"} />
            <label htmlFor={"work"}>work</label>
          </div>
          <div>
            <input type={"radio"} name={"genre"} value={"private"} />
            <label htmlFor={"private"}>private</label>
          </div>
        </form>
        {/*締切日の選択カレンダー*/}
        <div>
          <div>Limit-Date</div>
          <input
            type={"date"}
            onChange={(e) => {
              setLimitDate(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button>SUBMIT</button>
      </div>
    </>
  );
}


//POST確認用
// async function addNewTodo() {
//   const newTodo = {
//     todo: "meeting with team",
//     genre: "work",
//     limit_date: "2024-11-20",
//     status: "incomplete",
//   };
//   const response = await fetch("/post", {
//     method: "POST",
//     body: newTodo,
//   });
// }
// addNewTodo();

// const todo = atom("");
// const [todoAtom, setTodoAtom] = useAtom(todo);
// const genre = atom("");
// const [genreAtom, setGenreAtom] = useAtom(genre);
// const limitYear = atom(0);
// const [limitYearAtom, setLimitYearAtom] = useAtom(limitYear);
// const limitMonth = atom(0);
// const [limitMonthAtom, setLimitMonthAtom] = useAtom(limitMonth);
// const limitDay = atom(0);
// const [limitDayAtom, setLimitDayAtom] = useAtom(limitDay);
// const limitDate = atom("");
// const [limitDateAtom, setLimitDateAtom] = useAtom(limitDate);
// setLimitDateAtom(limitYearAtom + "-" + limitMonthAtom + "-" + limitDayAtom);
// console.log(limitDateAtom);
// const todoLimitDate = atom
