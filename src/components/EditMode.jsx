import React from "react";
import moment from "moment";

export function EditMode({
  setTodo,
  limitDate,
  todoData,
  setGenre,
  setLimitDate,
  setAllStates,
  updateTodo,
}) {
  return (
    <>
      {/*編集モードで必要な入力用DOM*/}
      <div className={"edit-card"} style={{ backgroundColor: "white" }}>
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
            value={moment(limitDate).format("yyyy-MM-DD")}
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
    </>
  );
}
