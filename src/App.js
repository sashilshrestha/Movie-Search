import React from "react";
import "./App.css";
import Searchbox from "./components/Searchbox";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <Searchbox />
      </div>
    </>
  );
}

export default App;
