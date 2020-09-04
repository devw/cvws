import React from "react";
import "./App.css";
import { Navbar } from "./navbar/navbar";
import { Article } from "./article/article";

function App() {
    return (
        <div className="App">
            <h1>Antonio Pierro</h1>
            <Navbar></Navbar>
            <Article></Article>
        </div>
    );
}

export default App;
