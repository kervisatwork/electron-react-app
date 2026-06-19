import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider, Routes, Router, Route } from "react-router"

import App from "./App.jsx"
import { ThemeProvider } from "styled-components";

import Theme from "./theme/Theme"

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);