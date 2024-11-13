import * as React from "react";
import { ToggleButton } from "@mui/material";

export function NewTodoGenreToggleButton({ setGenre, getRadioButton }) {
  return (
    <>
      {/*ジャンル入力トグルボタン*/}
      <div>Genre</div>
      <form
        id={"todo-genre"}
        style={{ display: "flex " }}
        onChange={() => {
          setGenre(getRadioButton());
        }}
      >
        <div>
          <input type={"radio"} name={"genre"} value={"work"} />
          <label htmlFor={"work"}>work</label>
        </div>
        <div>
          <input type={"radio"} name={"genre"} value={"private"} />
          <label htmlFor={"private"}>private</label>
        </div>
      </form>
    </>
  );
}
