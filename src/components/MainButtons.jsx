import React from "react";

export function MainButtons({ setDisplay, setIsCompleted }) {
  return (
    <>
      {/*ヘッダー*/}
      <h1>Todo Manager</h1>
      {/*メインの選択ボタン*/}
      <div style={{ display: "flex" }}>
        {/*新規作成*/}
        <button onClick={() => setDisplay("block")}>Create New Todo</button>
        {/*完了済みデータ表示*/}
        <button onClick={() => setIsCompleted(true)}>Todo : Complete</button>
        {/*未完了データ表示*/}
        <button onClick={() => setIsCompleted(false)}>Todo : Incomplete</button>
      </div>
    </>
  );
}
