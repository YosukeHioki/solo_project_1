import * as React from "react";
import { TextField } from "@mui/material";

export function NewTodoInput({ setTodo }) {
  return (
    <>
      {/*内容入力欄*/}
      <h2>New Todo</h2>
      <div>Todo</div>
      <TextField
        className="text-field"
        variant="standard"
        type={"text"}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
    </>
  );
}
