import React from "react";
import "./App.css";
import { Navbar } from "./navbar/navbar";
import marked from "marked";
import parse from "html-react-parser";

function App() {
    return (
        <div className="App">
            <h1>Antonio Pierro</h1>
            <Navbar></Navbar>
            <h2>About me</h2>
            <div id="content">
                <div id="banner">
                    <img src="https://picsum.photos/200/200" alt="" />
                </div>
                <div id="text">
                    {parse(
                        marked("# Marked in browser\n\nRendered by **marked**.")
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
