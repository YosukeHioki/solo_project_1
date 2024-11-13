import React from "react";
import moment from "moment";
import { Card, Button } from "@mui/material";
import "../style.css";

export function UncompletedTodosList({
  uncompletedTodos,
  changeStatus,
  deleteTodo,
  setIsEditMode,
  setAllStates,
}) {
  return uncompletedTodos.map((uncompletedTodo, index) => {
    const formattedLimitDate = moment(uncompletedTodo.limit_date).format(
      "YY/MM/DD",
    );
    return (
      <Card
        key={uncompletedTodo.id}
        className="todosList"
        style={{ backgroundColor: "orange", marginBottom: "1%" }}
      >
        <h2>{uncompletedTodo.status}</h2>
        <Card className="todo-data">
          <div>TODO : {uncompletedTodo.todo}</div>
          <div>GENRE : {uncompletedTodo.genre}</div>
          <div>LIMIT-DATE : {formattedLimitDate}</div>
          {/*<div>(id : {uncompletedTodo.id})</div>*/}
        </Card>
        <div className="uncompletedTodosButtons" style={{ display: "flex" }}>
          {/*完了ボタン*/}
          <Button
            variant="contained"
            onClick={async () => {
              await changeStatus(uncompletedTodo);
            }}
          >
            COMPLETE
          </Button>
          {/*編集ボタン*/}
          <Button
            variant="contained"
            onClick={() => {
              setAllStates(uncompletedTodo);
            }}
          >
            EDIT
          </Button>
          {/*削除ボタン*/}
          <Button
            variant="contained"
            onClick={async () => {
              await deleteTodo(uncompletedTodo);
            }}
          >
            DELETE
          </Button>
        </div>
      </Card>
    );
  });
}
