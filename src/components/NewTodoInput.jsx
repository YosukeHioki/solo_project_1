import React from "react";

export function NewTodoInput({ setTodo }) {
  return (
    <>
      {/*内容入力欄*/}
      <h2>Todo Card</h2>
      <div>Todo</div>
      <input
        type={"text"}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
    </>
  );
}
