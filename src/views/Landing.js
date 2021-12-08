import "../css/Landing.css"

import React from "react";
import {NavLink} from "react-router-dom";

/**
 * The home page view for the pupil landing site.
 * @returns {JSX.Element}
 * @constructor
 */
function Landing() {
    return <div className={"home-page"}>
            <h1 className={"home-header"}>
                pupil
            </h1>
            <div>
                <h2 className={"home-sub-header"}>
                    A modern solution for recording college lectures.
                </h2>
            </div>
            <div className={"learn-more-link-container"}>
                <NavLink to={"/about"} className={"learn-more-link"}>Learn more</NavLink>
            </div>
    </div>
}

export default Landing;
