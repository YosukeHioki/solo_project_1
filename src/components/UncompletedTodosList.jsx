import React from "react";
import moment from "moment";

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
      <div
        key={uncompletedTodo.id}
        style={{ backgroundColor: "orange", marginBottom: "1%" }}
      >
        <h2>{uncompletedTodo.status}</h2>
        <div>todo : {uncompletedTodo.todo}</div>
        <div>genre : {uncompletedTodo.genre}</div>
        <div>limit_date : {formattedLimitDate}</div>
        <div>(id : {uncompletedTodo.id})</div>
        <div style={{ display: "flex" }}>
          {/*完了ボタン*/}
          <button
            onClick={async () => {
              await changeStatus(uncompletedTodo);
            }}
          >
            COMPLETE
          </button>
          {/*編集ボタン*/}
          <button
            onClick={() => {
              setAllStates(uncompletedTodo);
            }}
          >
            EDIT
          </button>
          {/*削除ボタン*/}
          <button
            onClick={async () => {
              await deleteTodo(uncompletedTodo);
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  });
}
