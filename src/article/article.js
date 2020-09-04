import React from "react";
import classes from "./article.module.css";
import marked from "marked";
import parse from "html-react-parser";

export const Article = (props) => {
    const links = ["About me", "Publications"];
    return (
        <div className={classes.article}>
            <h2>{props.article.title}</h2>
            <div id="banner">
                <img src="https://picsum.photos/200/200" alt="" />
            </div>
            <div id="text">{parse(marked(props.article.article))}</div>
        </div>
    );
};
