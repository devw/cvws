import React from "react";
import classes from "./navbar.module.css";

export const Navbar = (props) => {
    const links = ["About me", "Publications"];
    return (
        <ul className={classes.navbar}>
            {links.map((e) => (
                <li>
                    <a href="#">{e}</a>
                </li>
            ))}
        </ul>
    );
};
