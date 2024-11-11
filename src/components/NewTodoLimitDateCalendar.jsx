import React from "react";

export function NewTodoLimitDateCalendar({
  setLimitDate,
  addNewTodo,
  todo,
  genre,
  limitDate,
}) {
  return (
    <>
      {/*締切日の選択カレンダー*/}
      <div>Limit-Date</div>
      <div>
        <input
          type={"date"}
          onChange={(e) => {
            setLimitDate(e.target.value);
          }}
        />
      </div>
      {/*登録ボタン*/}
      <div>
        <button
          onClick={() => {
            if (todo !== "" && genre !== "" && limitDate !== "") {
              addNewTodo();
            }
          }}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}
