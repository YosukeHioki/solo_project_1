import * as React from "react";
import { Button } from "@mui/material";
import "../style.css";

export function MainButtons({ setDisplay, setIsCompleted }) {
  return (
    <>
      {/*ヘッダー*/}
      <h1>Todo Manager</h1>
      {/*メインの選択ボタン*/}
      <div className="buttons">
        <div style={{ display: "flex" }}>
          {/*新規作成*/}
          <Button variant="outlined" onClick={() => setDisplay("block")}>
            Create New Todo
          </Button>
          {/*完了済みデータ表示*/}
          <Button variant="outlined" onClick={() => setIsCompleted(true)}>
            Todo : Complete
          </Button>
          {/*未完了データ表示*/}
          <Button variant="outlined" onClick={() => setIsCompleted(false)}>
            Todo : Incomplete
          </Button>
        </div>
      </div>
    </>
  );
}
