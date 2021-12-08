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
        <div className={"container"}>
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
        <div className={"container"} id={"learn-more"}>
            <div className={"section learn-more-section"}>
                <h2 style={{marginTop: 0}}>Students deserve better.</h2>
                <p>A student's goal in going to college is to learn material<span>&#8212;</span>not to learn
                    material the first time that student hears it. Unfortunately, even in top-rated universities, this
                    is often the expectation. Even if a student takes extremely good notes, if the they don't remember
                    and understand what the professor said, the notes won't make any sense. To add to the problem, many
                    classes don't require
                    textbooks, and if they do, they're nearly impossible to read efficiently.
                </p>
                <p style={{marginBottom: "30px"}}>But there's another problem: What if a student wasn't able to go to a
                    lecture? This could be for multiple
                    reasons, such as being sick, having work, or taking a day to address mental health. Whatever the
                    reason is,
                    the current in-person lecture model is not capable of providing this as a real option. For them,
                    it's either address their personal well being or
                    go to class.
                </p>

                <h2>Professors deserve better.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec elit nec ipsum vulputate
                    molestie ut id magna. Phasellus ligula dolor, varius et nibh sed, laoreet rhoncus felis. Curabitur
                    id neque id eros blandit tincidunt vitae id dolor. Quisque mattis hendrerit nulla. Curabitur id
                    ipsum a ligula lacinia fermentum. Praesent vitae accumsan est, vel sodales nulla. Integer convallis
                    metus ut dui faucibus, in tempus sapien interdum. Ut non dui non nunc placerat tempor.
                </p>
                <p style={{marginBottom: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
                    habitasse platea dictumst. Suspendisse ut suscipit nisi. Sed malesuada ultrices sapien nec rutrum.
                    In hac habitasse platea dictumst. Vivamus commodo erat massa, nec tristique nulla congue at.
                    Pellentesque rutrum fermentum ipsum, sed egestas risus auctor nec. Sed sit amet velit nisi.
                </p>
                <h2>We offer the solution.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec elit nec ipsum vulputate
                    molestie ut id magna. Phasellus ligula dolor, varius et nibh sed, laoreet rhoncus felis. Curabitur
                    id neque id eros blandit tincidunt vitae id dolor. Quisque mattis hendrerit nulla. Curabitur id
                    ipsum a ligula lacinia fermentum. Praesent vitae accumsan est, vel sodales nulla. Integer convallis
                    metus ut dui faucibus, in tempus sapien interdum. Ut non dui non nunc placerat tempor.
                </p>
                <p style={{marginBottom: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
                    habitasse platea dictumst. Suspendisse ut suscipit nisi. Sed malesuada ultrices sapien nec rutrum.
                    In hac habitasse platea dictumst. Vivamus commodo erat massa, nec tristique nulla congue at.
                    Pellentesque rutrum fermentum ipsum, sed egestas risus auctor nec. Sed sit amet velit nisi.
                </p>
                <NavLink to={"/about"} className={"learn-more-link"}>See the details</NavLink>
            </div>
        </div>
    </div>
}

export default Landing;
