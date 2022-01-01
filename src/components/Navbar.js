import React from "react";
import "../css/Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return <div className={"navbar-wrapper"}>
        <div className={"navbar"}>
            <NavLink to={"/"} className={"navbar-left-item"}>
                pupil
            </NavLink>
            <NavLink to={"/about"} className={"navbar-link"}>
                About
            </NavLink>
            <NavLink to={"/team"} className={"navbar-link"}>
                Team
            </NavLink>
            <NavLink to={"/contact"} className={"navbar-link"}>
                Contact
            </NavLink>
        </div>
    </div>
}

export default Navbar;
