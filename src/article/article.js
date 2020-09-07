import React from "react";
import classes from "./article.module.css";
import marked from "marked";
import parse from "html-react-parser";

export const Article = ({ name, story }) => (
    <div className={classes.article}>
        <h2>{name}</h2>
        <div id="banner">
            <img src="https://picsum.photos/200/200" alt="" />
        </div>
        <div id="text">{parse(marked(story || ""))}</div>
    </div>
);
