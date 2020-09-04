import React from "react";
import classes from "./navbar.module.css";

export const Navbar = (props) => (
    <ul className={classes.navbar}>
        <li>
            <a href="#">About me</a>
        </li>
        <li>
            <a href="#">Publications</a>
        </li>
    </ul>
);
