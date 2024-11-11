export function CompletedTodos({ setIsCompletedData, completedTodos }) {
  setIsCompletedData(true);
  console.log(completedTodos);
  return completedTodos.map((todo, index) => {
    return (
      <div style={{ backgroundColor: "cyan", justifyContent: "center" }}>
        <div>{todo.todo}</div>
        <div>{todo.genre}</div>
        <div>{todo.limit_date}</div>
      </div>
    );
  });
}
