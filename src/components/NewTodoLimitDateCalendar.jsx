import * as React from "react";
import { Button } from "@mui/material";
import "../style.css";

export function NewTodoLimitDateCalendar({
  setLimitDate,
  addNewTodo,
  todo,
  genre,
  limitDate,
  setDisplay,
}) {
  return (
    <div className="calender" style={{ marginTop: "1%" }}>
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
      <div className="buttons">
        <Button
          variant="contained"
          onClick={() => {
            if (todo !== "" && genre !== "" && limitDate !== "") {
              addNewTodo();
            }
          }}
        >
          SUBMIT
        </Button>
        <Button variant="contained" onClick={() => setDisplay("none")}>
          CANCEL
        </Button>
      </div>
    </div>
  );
}
