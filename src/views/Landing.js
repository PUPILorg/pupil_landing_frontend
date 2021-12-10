import "../css/Landing.css"

import React from "react";
import {NavLink} from "react-router-dom";
import Footer from "../components/Footer";

/**
 * The home page view for the pupil landing site.
 * @returns {JSX.Element}
 * @constructor
 */
function Landing() {
    return <div>
        <div className={"home-page"}>
            <div className={"container main-container"}>
                <div className={"section"}>
                    <h1 className={"home-header"}>
                        pupil
                    </h1>
                    <div>
                        <h2 className={"home-sub-header"}>
                            A modern system for recording college lectures.
                        </h2>
                    </div>
                    <div>
                        <a href="#learn-more" className={"learn-more-link"}>Learn more</a>
                    </div>
                </div>
            </div>
            <div className={"container secondary-container"} id={"learn-more"}>
                <div className={"section learn-more-section"}>
                    <h2 style={{marginTop: 0}}>Students deserve better.</h2>
                    <p>A student's goal in going to college is to learn material—not to learn material the first time
                        that student hears it. Unfortunately, even in top-rated universities, this is often the
                        expectation. Even if a student takes extremely good notes, if they don't remember and understand
                        what the professor said, the notes won't make any sense. To add to the problem, many classes
                        don't require textbooks, and if they do, they're nearly impossible to read efficiently.
                    </p>
                    <p className={"bottom-paragraph"}>But there's another problem: What if a student wasn't able to go
                        to a lecture? This could be for a number of reasons, such as being sick, having work, or taking
                        a day to address mental health. Whatever the reason is, the current in-person lecture model is
                        not capable of providing this as a real option. For them, it's a choice between addressing their
                        personal well being and going to class.
                    </p>

                    <h2>Professors deserve better.</h2>
                    <p className={"bottom-paragraph"}>Some professors attempt to address the problem by recording their
                        lectures and uploading them online. This helps the students, but places the burden of managing
                        each recording on the professor. Many professors avoid this burden, choosing to not record their
                        lectures entirely.
                    </p>
                    <h2>We offer the solution.</h2>
                    <p className={"bottom-paragraph"}>Pupil enables professors to have their lectures automatically
                        recorded and uploaded and provides students with convenient online access to all of their class
                        lectures. This is done through intelligent hardware and software that is easy to set up and even
                        easier to use.
                    </p>
                    <div style={{textAlign: "center"}}>
                        <NavLink to={"/about"} className={"learn-more-link"}>See the details</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Landing;
