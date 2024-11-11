import { MainButtons } from "./MainButtons";
import { NewTodoInput } from "./NewTodoInput";
import { NewTodoGenreToggleButton } from "./NewTodoGenreToggleButton";
import { NewTodoLimitDateCalendar } from "./NewTodoLimitDateCalendar";
import React from "react";

import { addNewTodoData } from "../../db/todoModel";

export function NewTodo({
  setTodo,
  setGenre,
  getRadioButton,
  setLimitDate,
  addNewTodo,
}) {
  return (
    <div>
      {/*ヘッダー・選択ボタン*/}
      <MainButtons />
      {/*内容入力欄*/}
      <NewTodoInput setTodo={setTodo} />
      {/*ジャンル入力トグルボタン*/}
      <NewTodoGenreToggleButton
        setGenre={setGenre}
        getRadioButton={getRadioButton}
      />
      {/*締切日の選択カレンダー*/}
      <NewTodoLimitDateCalendar
        setLimitDate={setLimitDate}
        addNewTodo={addNewTodo}
      />
    </div>
  );
}
