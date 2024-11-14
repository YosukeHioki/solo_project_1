import React from "react";
// import { Provider } from "jotai";
import { Route, Routes } from "react-router-dom";

import { App } from "./App";

export function AppRoutes() {
  return (
    // <Provider>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    // {/*</Provider>*/}
  );
}
