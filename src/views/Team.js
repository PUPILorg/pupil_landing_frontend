import React from "react";
import "../css/Team.css";
import Footer from "../components/Footer";

/**
 * The Team page view for the landing site
 * @returns {JSX.Element}
 * @constructor
 */
function Team() {
    return <div>
        <div className={"team-page"}>
            <div className={"team-container"}>
                <h1 className={"team-header"}>Meet the team</h1>
                <div className={"team-column"}>
                    <div className={"team-member-card"}>
                        <h2 style={{marginBottom: 0}}>
                            Grant Nations
                        </h2>
                        <p style={{marginTop: 0}}>Co-founder</p>
                        <p>
                            Grant Nations is a student at the University of Utah studying computer science and
                            physics.
                            His
                            dream has always been to create a company that changes the world, and in his sophomore
                            year
                            of
                            college, he decided that it was time to focus on accomplishing that dream. He is
                            obsessed
                            with
                            the
                            euphoria of finding a solution to a problem that at one point seemed impossible. In
                            fact, he
                            feels
                            that his greatest strength is his ability to solve problems.
                        </p>
                        <p>
                            To Grant, Pupil is personal. As a double stem major, he has spent thousands of hours in
                            lectures, taking notes, or studying, and knows the drastic effects that Pupil will have
                            on
                            learning difficult material. But more than that, he is committed to creating a product
                            that
                            will
                            help thousands of students reach their highest academic potential.
                        </p>
                        <p>
                            He lives by the Elon Musk quote: <i><b>Work like hell.</b></i>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    </div>
}

export default Team;
