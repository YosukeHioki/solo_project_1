import React from "react";

export function CompletedTodos({ completedTodos }) {
  return completedTodos.map((todo, index) => {
    return (
      <div key={index} style={{ backgroundColor: "cyan", marginBottom: "1%" }}>
        <h2>{todo.status}</h2>
        <div>todo : {todo.todo}</div>
        <div>genre : {todo.genre}</div>
        <div>limit_data : {todo.limit_date}</div>
      </div>
    );
  });
}
