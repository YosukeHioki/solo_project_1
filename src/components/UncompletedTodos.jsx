import React from "react";

export function UncompletedTodos({ uncompletedTodos }) {
  return uncompletedTodos.map((todo, index) => {
    return (
      <div
        key={index}
        style={{ backgroundColor: "orange", marginBottom: "1%" }}
      >
        <h2>{todo.status}</h2>
        <div>todo : {todo.todo}</div>
        <div>genre : {todo.genre}</div>
        <div>limit_data : {todo.limit_date}</div>
        <div>(id : {todo.id}</div>
        <button>Edit</button>
      </div>
    );
  });
}
