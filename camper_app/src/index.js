import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { UserContextProvider } from "./context/userContext";
import GlobalStyle from "./theme/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
