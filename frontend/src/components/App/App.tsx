import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../Main";
import Header from "../Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
