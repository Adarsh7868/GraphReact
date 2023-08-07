import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NewApp from "./NewApp";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}></Route>
        <Route path="/git/*" element={<NewApp />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
