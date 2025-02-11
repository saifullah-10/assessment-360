import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { mainApi } from "./redux/query.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={mainApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
