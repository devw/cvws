import React from "react";
import "./App.css";
import marked from "marked";
import parse from "html-react-parser";

function App() {
    return (
        <div className="App">
            <h1>Antonio Pierro</h1>
            <ul id="nav">
                <li>
                    <a href="#">About me</a>
                </li>
                <li>
                    <a href="#">Publications</a>
                </li>
            </ul>
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
