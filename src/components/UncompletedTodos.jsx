import React from "react";
import moment from "moment";

export function UncompletedTodos({ uncompletedTodos }) {
  return uncompletedTodos.map((todo, index) => {
    const limitDate = moment(todo.limit_date);
    const formattedLimitDate = limitDate.format("YY-MM-DD");
    return (
      <div
        key={index}
        style={{ backgroundColor: "orange", marginBottom: "1%" }}
      >
        <h2>{todo.status}</h2>
        <div>todo : {todo.todo}</div>
        <div>genre : {todo.genre}</div>
        <div>limit_data : {formattedLimitDate}</div>
        <div>(id : {todo.id}</div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  });
}
