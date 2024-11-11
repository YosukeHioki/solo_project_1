import React from "react";

export function MainButtons() {
  return (
    <>
      {/*ヘッダー*/}
      <h1>Todo Manager</h1>
      {/*選択ボタン*/}
      <div style={{ display: "flex" }}>
        <button>Create New Todo</button>
        <button>Todo : Completed</button>
        <button>Todo : Uncompleted</button>
      </div>
    </>
  );
}
