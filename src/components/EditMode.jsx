import React, { useEffect, useState } from "react";
import moment from "moment";

export function EditMode({
  setTodo,
  limitDate,
  todoData,
  setGenre,
  setLimitDate,
  setAllStates,
  setIsEditMode,
  updateTodo,
}) {
  return (
    <div style={{ backgroundColor: "lightgreen", marginTop: "2%" }}>
      {/*編集モードで必要な入力用DOM*/}
      <div className={"edit-mode"}>
        <div>Todo</div>
        <input
          type={"text"}
          value={todoData.todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <div>Genre</div>
        <select
          value={todoData.genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="work">work</option>
          <option value="private">private</option>
        </select>
        <div>Limit-Date</div>
        <div>
          <input
            type={"date"}
            onChange={(e) => {
              setLimitDate(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        onClick={async () => {
          setAllStates(todoData);
          await updateTodo(todoData);
        }}
      >
        OK
      </button>
      <button
        onClick={() => {
          setIsEditMode(false);
        }}
      >
        CANCEL
      </button>
    </div>
  );
}
