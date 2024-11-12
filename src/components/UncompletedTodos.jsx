import React, { useEffect } from "react";

export function CompletedTodos({ setIsCompletedData, completedTodos }) {
  useEffect(() => {
    setIsCompletedData(true);
  }, []);

  console.log(completedTodos);
  return completedTodos.map((todo, index) => {
    return (
      <div key={index} style={{ backgroundColor: "cyan", marginBottom: "1%" }}>
        <div>todo : {todo.todo}</div>
        <div>genre : {todo.genre}</div>
        <div>limit_data : {todo.limit_date}</div>
      </div>
    );
  });
}
