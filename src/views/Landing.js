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
                    <p>A student's goal in going to college is to learn material<span>&#8212;</span>not to learn
                        material the first time that student hears it. Unfortunately, even in top-rated universities, this
                        is often the expectation. Even if a student takes extremely good notes, if the they don't remember
                        and understand what the professor said, the notes won't make any sense. To add to the problem, many
                        classes don't require textbooks, and if they do, they're nearly impossible to read efficiently.
                    </p>
                    <p style={{marginBottom: "40px"}}>But there's another problem: What if a student wasn't able to go to a
                        lecture? This could be for a number of reasons, such as being sick, having work, or taking a day to
                        address mental health. Whatever the reason is, the current in-person lecture model is not capable of
                        providing this as a real option. For them, it's either address their personal well being or go to
                        class.
                    </p>

                    <h2>Professors deserve better.</h2>
                    <p style={{marginBottom: "40px"}}>Some professors attempt to address the problem by recording their
                        lectures and uploading them online. This helps the students, but places the burden of managing each
                        recording on the professor. Many professors avoid this burden, choosing to not record their lectures
                        entirely.
                    </p>
                    <h2>We offer the solution.</h2>
                    <p style={{marginBottom: "40px"}}>Pupil is a system where professors can opt in to have lectures
                        automatically recorded based on their class schedule. This includes a clear view of the front of the
                        classroom as well as any material that is shared via a projector. This is done using a device in
                        each classroom connected to a camera and a professor’s laptop if they choose to use a projector. The
                        professor is notified on their laptop when the recording is about to begin, and after a class is
                        done, the lecture recording is uploaded to the professor’s online portfolio. Here, they can annotate
                        or edit the video and upload it to their class page for their students to view. Students then have
                        access to all of their class lectures online in one convenient location.
                    </p>
                    <NavLink to={"/about"} className={"learn-more-link"}>See the details</NavLink>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default Landing;
