
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Display from "./Display.jsx";
import "./index.css";
import MainPage from "./MainPage.jsx";
import Round1 from "./Round/Round1.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/display" element={<Display />} />
        {/* <Route path="/Round1" element={<Round1/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

