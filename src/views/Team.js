import React from "react";
import "../css/Team.css";
import Footer from "../components/Footer";
import {NavLink} from "react-router-dom";

/**
 * The Team page view for the landing site
 * @returns {JSX.Element}
 * @constructor
 */
function Team() {
    return <div>
        <div className={"team-page"}>
            <div className={"team-container"}>
                <div className={"team-column"}>
                    <h1>Meet the team</h1>
                    <div className={"team-member-card"}>
                        <img src="/images/grant_team_pic_wedding.jpg" alt="Grant Nations"
                             className={"team-member-pic"}/>
                        <h2 style={{marginBottom: 0}}>
                            Grant Nations
                        </h2>
                        <p style={{marginTop: 0}}>Co-founder</p>
                        <p>
                            Grant Nations is a student at the University of Utah studying computer science and physics.
                            His dream has always been to create a company that changes the world, and in his sophomore
                            year of college, he decided that it was time to focus on accomplishing that dream. He is
                            obsessed with the euphoria of finding a solution to a problem that at one point seemed
                            impossible. In fact, he feels that his greatest strength is his ability to solve problems.
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
                    </div>
                    <div className={"team-member-card"}>
                        <img src="/images/jan_team_pic_128px.jpg" alt="Jan Cas"
                             className={"team-member-pic"}/>
                        <h2 style={{marginBottom: 0}}>
                            Jan Cas
                        </h2>
                        <p style={{marginTop: 0}}>Co-founder</p>
                        <p>
                            Jan Cas grew up in Germany and moved to the US when he was 14. This move made him realize
                            that even the biggest challenges can be overcome with time, effort and adaptation. As time
                            went on, he realized that the greatest feeling is solving a problem that improves the lives
                            of others. He decided that his goal was to one day build something that changes the way the
                            world works, and to accomplish this, is now studying mechanical engineering and computer
                            science at the University of Utah.
                        </p>
                        <p>
                            In his time at college, Jan has spent countless hours deciphering books, notes, and slides
                            while trying to remember what the professor said during lecture. In order to do well in his
                            classes, he has often had to memorize material instead of internalize it. This problem is
                            the original drive for creating Pupil, and he knows from personal experience how badly this
                            problem needs to be solved.
                        </p>
                        <p>
                            He is fascinated by the quote: <i><b>Nothing great in the world was accomplished without
                            passion.</b></i> - Georg Wilhelm Friedrich Hegel
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
}

export default Team;
