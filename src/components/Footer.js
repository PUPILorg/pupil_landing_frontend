import React from "react";
import "../css/Footer.css";

function Navbar(){

    const date = new Date().getFullYear();

    return <div className={"footer"}>
        <p className={"footer-company-name"}>
            &copy; Pupil {date}
        </p>
    </div>
}

export default Navbar;
