import React from "react";
import "../css/Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar(){
    return <div className={"navbar"}>
        <NavLink to={"/about"} className={"navbar-link"}>
            About
        </NavLink>
        <NavLink to={"/team"} className={"navbar-link"}>
            Team
        </NavLink>
        <NavLink to={"/faqs"} className={"navbar-link"}>
            FAQs
        </NavLink>
        <NavLink to={"/contact"} className={"navbar-link"}>
            Contact
        </NavLink>
        <NavLink to={"/contact"} className={"navbar-link"}>
            Development
        </NavLink>
    </div>
}

export default Navbar;
