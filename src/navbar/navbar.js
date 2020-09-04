import React from "react";
import classes from "./navbar.module.css";

export const Navbar = (props) => {
    const links = ["About me", "Publications"];
    const handleClick = function (e) {
        e.stopPropagation();
        props.onClick(e.target.innerHTML);
    };
    return (
        <ul className={classes.navbar}>
            {links.map((e) => (
                <li>
                    <a href="#" onClick={handleClick}>
                        {e}
                    </a>
                </li>
            ))}
        </ul>
    );
};
