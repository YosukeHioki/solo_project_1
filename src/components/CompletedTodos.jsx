import React from "react";
import moment from "moment";
import { Card } from "@mui/material";

import "../style.css";

export function CompletedTodos({ completedTodos }) {
  return completedTodos.map((todo, index) => {
    const limitDate = moment(todo.limit_date);
    const formattedLimitDate = limitDate.format("YY/MM/DD");
    return (
      <Card
        className="todosList"
        key={index}
        style={{ backgroundColor: "cyan", marginBottom: "1%" }}
      >
        <h2>{todo.status}</h2>
        <Card className="todo-data">
          <div>TODO : {todo.todo}</div>
          <div>GENRE : {todo.genre}</div>
          <div>LIMIT-DATE : {formattedLimitDate}</div>
          {/*<div>(id : {todo.id})</div>*/}
        </Card>
      </Card>
    );
  });
}
