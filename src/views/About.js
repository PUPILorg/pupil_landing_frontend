import React from "react";
import "../css/Landing.css";
import Footer from "../components/Footer";
import useWindowDimensions from "../hooks/useWindowDimensions";
import ResizePng from "../components/ResizePng";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function About() {

    const {width} = useWindowDimensions();

    return <div>
        <div className={"home-page"}>
            <div className={"container"}>
                <div className={"section learn-more-section"}>
                    <h1>
                        What is pupil?
                    </h1>
                    <h2>The problem:</h2>
                    <p>Students often pay a lot of money to go to college and attend lectures where they hope to learn
                        the material that will set them up for the rest of their lives. Unfortunately for them, they
                        often only get to watch these lectures once. Some would say that this isn’t a problem if that
                        student takes good enough notes, but as any serious student knows, this simply isn’t the case.
                        Notes only work if a student understands what the professor is talking about the first time
                        around. If a student gets hung up on a detail for even a second, they risk messing up their
                        notes. So instead, the student blindly writes down what is on the chalkboard without
                        understanding any of it.

                    </p>
                    <p>Or what if a student gets sick and has to miss a lecture? Their
                        best option is to find someone who is willing to share their notes, or try to decipher the
                        textbook to find the information. Just to make it worse: remember that the student <i>is still
                            paying</i> for that lecture. So, a student has to make a choice between taking care of their
                        health
                        or going to class. For many students, the choice is to go to class.
                    </p>
                    <p>Some professors do record their lectures, addressing many of the issues that students face.
                        However, managing a lecture recording is a hassle that takes extra time and effort each lecture,
                        on top of
                        their already busy workload. Some professors prefer to avoid this hassle altogether and not
                        record their lectures.</p>
                    <p className={"bottom-paragraph"}>Pupil offers a solution to each of these problems and more in an
                        elegant system where professors
                        and students both benefit.</p>

                    <h2>The solution:</h2>
                    <p>
                        Pupil serves two main functions:
                    </p>
                    <ol>
                        <li>
                            To provide professors with a way to automatically record and upload their lectures
                            online based on their class schedule
                        </li>
                        <li>
                            To give students convenient online access to recordings of their in-person lectures
                        </li>
                    </ol>
                    <p className={"bottom-paragraph"}>
                        This way, students get the benefit of lecture recordings and professors lose the hassle.
                    </p>


                    <h2>Technology:</h2>
                    <p>Lectures are recorded using a Pupil Recorder, a smart device that is secured in a classroom.
                        Installation and setup of a Recorder is handled by the university’s technology management and is
                        requested when a professor wishes to record a lecture in a classroom that does not contain a
                        Recorder. If a Recorder already exists in a classroom, any professor using that classroom can
                        set up a recording schedule.</p>
                    <p>
                        When setting up a recording schedule, a professor can choose to use a camera, projected
                        material, or both. In each case, the recorder only records data from a media type if a professor
                        chooses that media type <i>and</i> the Recorder detects a connection on the corresponding
                        inputs. One key aspect of the Recorder is that the camera and projector connections pass through
                        the recorder, meaning that a professor can use the cameras or projectors as if the Recorder
                        wasn’t even there.
                    </p>
                    <p>
                        When a professor sets up a lecture schedule in their account, a corresponding task is created in
                        the Pupil database. Then, whenever this lecture is scheduled to start, the Recorder in that
                        classroom begins recording with no action required by the professor. At the end of a lecture,
                        the Recorder ends
                        the recording and the video is uploaded to the professor’s online account.
                    </p>
                    <p className={"bottom-paragraph"}>
                        During a lecture, video is saved to an SD card in the Recorder. Once a video is uploaded to a
                        professor’s account, the video files are then cleared from the SD card. However, in the case
                        that a video fails to upload, the video will be preserved on the SD card so that the professor
                        can manually upload it to their account. This way, professors and students can be confident that
                        their lecture recordings are safe.
                    </p>


                    <h2>A walkthrough:</h2>

                    <p><i>For professors:</i></p>
                    <p>First, a professor must first create an online account to get started. Here they can define the
                        lecture schedules and locations for the classes that they wish to record. Once they have a
                        recording schedule set up, each lecture will automatically be recorded and uploaded to their
                        account based on that schedule. </p>
                    <p>The recording includes a view of the front of the classroom and/or material shared via a
                        projector. Which type of media the professor wishes to record (from a camera, projector, or
                        both) can be selected when setting up the recording schedule.
                    </p>
                    <p>During the lecture, a professor can pause or stop the recording using their account dashboard
                        online. Future releases will include a mobile app.</p>
                    <p>
                        After a lecture, a professor can easily view, annotate, or edit a video. Once the video is
                        ready, with the click of a button, it’s published to be viewed by the students in their class. A
                        professor can alternatively choose to have their videos automatically published to their
                        students after a lecture to <i>completely</i> automate the process.
                    </p>
                    <div
                        style={{textAlign: "center"}}
                    >
                        <p className={"image-description"}>An example of a professor's class section view.</p>
                        <ResizePng
                            imgPrefix={"/images/about_prof_lectures_"}
                            width={width}
                            alt={"Professor lectures view"}
                            style={{maxWidth: "100%", height: "auto", border: "1px solid #1d242b"}}
                        />
                    </div>

                    <p><i>For students:</i></p>
                    <p>
                        A student must first create an online account using their school email to gain access to their
                        professor’s lecture recordings. Each of their classes that use Pupil to record lectures are
                        displayed in their dashboard. Within each of their class sections, a student has access to all
                        of the
                        lecture recordings from that class.
                    </p>
                    <p>
                        When watching a recording, students are able to view the camera recording, projector screen
                        share, or both. This way, the student won’t miss a thing, even if the professor chooses to
                        utilize
                        multiple types of displays at the same time.
                    </p>
                    <div
                        className={"bottom-paragraph"}
                        style={{textAlign: "center"}}
                    >
                        <p className={"image-description"}>An example of a student's dashboard view.</p>
                        <ResizePng
                            imgPrefix={"/images/about_student_lectures_"}
                            width={width}
                            alt={"Student lectures view"}
                            style={{maxWidth: "100%", height: "auto", border: "1px solid #1d242b"}}
                        />
                    </div>

                    <h2>The vision:</h2>
                    <p className={"bottom-paragraph"}>Pupil aims to set a new standard for in-person college lectures.
                        We believe that giving students
                        the ability to conveniently review high quality lecture videos provides them with a crucial
                        resource for their success in school. We also believe that the tools that currently exist for
                        recording college lectures are cumbersome, produce only mediocre
                        results, are therefore have low adoption. Pupil provides a full system that benefits both
                        students and professors, and finally
                        brings college education into the modern age.</p>

                    <h2>Development:</h2>
                    <p className={"bottom-paragraph"}>
                        Pupil is currently testing in classrooms at the University of Utah, where it will continue to
                        receive feedback from professors and students until launch.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
}

export default About;
