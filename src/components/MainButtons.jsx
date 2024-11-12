import React, { useEffect, memo } from "react";

export function MainButtons({ setCompleteOrIncomplete }) {
  return (
    <>
      {/*ヘッダー*/}
      <h1>Todo Manager</h1>
      {/*メインの選択ボタン*/}
      <div style={{ display: "flex" }}>
        {/*新規作成*/}
        <button>Create New Todo</button>
        {/*完了済みデータ表示*/}
        <button onClick={() => setCompleteOrIncomplete("complete")}>
          Todo : Completed
        </button>
        {/*未完了データ表示*/}
        <button onClick={() => setCompleteOrIncomplete("incomplete")}>
          Todo : Uncompleted
        </button>
      </div>
    </>
  );
}
