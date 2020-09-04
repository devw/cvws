import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./navbar/navbar";
import { Article } from "./article/article";
import { changeArticle } from "./services/navigation-handler";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { article: "" };
        this.changeArticle = changeArticle.bind(this);
        this.changeArticle("About me");
    }
    render = () => (
        <div className="App">
            <h1>Antonio Pierro</h1>
            <Navbar onClick={this.changeArticle}></Navbar>
            <Article article={this.state}></Article>
        </div>
    );
}

export default App;
