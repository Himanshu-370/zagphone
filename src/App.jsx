import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Welcome from "./components/Welcome";
import Item from "./components/Item";
import Buy from "./components/Buy";

function App() {
  return (
    <React.Fragment>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg z-100 relative">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/item" element={<Item />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
