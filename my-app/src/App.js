import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Hello from "./Component/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App">
          <Hello />
        </div>
      </header>
    </div>
  );
}




export default App;