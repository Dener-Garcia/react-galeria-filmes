import React from "react";
import NavBars from "./components/navbar";

import "./App.css"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>App Home</h1>
      <NavBars />
      <Outlet/>
    </>
  );
}

export default App;
