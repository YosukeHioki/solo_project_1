import React, { useEffect, useState } from "react";
import moment from "moment";
import { Card, Button, TextField } from "@mui/material";
import "../style.css";

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
    <Card className="edit-todo">
      {/*編集モードで必要な入力用DOM*/}

      <div className={"edit-mode"}>
        <div>Todo</div>
        <TextField
          className="text-field"
          variant="standard"
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
      <div className="buttons">
        <Button
          variant="contained"
          onClick={async () => {
            setAllStates(todoData);
            await updateTodo(todoData);
          }}
        >
          OK
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setIsEditMode(false);
          }}
        >
          CANCEL
        </Button>
      </div>
    </Card>
  );
}
