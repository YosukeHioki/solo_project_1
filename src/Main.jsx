import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "jotai/react/Provider";

//POST確認用
// async function addNewTodo() {
//   const newTodo = {
//     todo: "meeting with team",
//     genre: "work",
//     limit_date: "2024-11-20",
//     status: "incomplete",
//   };
//   const response = await fetch("/post", {
//     method: "POST",
//     body: newTodo,
//   });
// }

// addNewTodo();

createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <AppRoutes />)
    </BrowserRouter>
  </Provider>,
);
