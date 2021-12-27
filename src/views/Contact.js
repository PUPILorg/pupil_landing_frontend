import React from "react";
import "../css/Contact.css";
import Footer from "../components/Footer";

function Contact() {
    return <div className={"contact-page"}>
        <div className={"contact-container"}>
            <h1 style={{marginTop: 0}}>Let's get in touch.</h1>
            <div>
                <h2 className={"email-us"}>Email us:</h2>
                <p>pupil@gmail.com</p>
            </div>
            <Footer />
        </div>
    </div>
};

export default Contact;