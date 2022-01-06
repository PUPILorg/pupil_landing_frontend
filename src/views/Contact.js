import React from "react";
import "../css/Contact.css";
import Footer from "../components/Footer";
import {useState} from "react";
import{ init, send } from '@emailjs/browser';
init(process.env.REACT_APP_EMAILJS_USER_ID);

function Contact() {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((response) => {
                console.log('SUCCESS', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED', err);
            });
    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    return <div className={"contact-page"}>
        <div className={"contact-container"}>
            <div className={"contact-form-container"}>
                <h1 style={{marginTop: 0, marginRight: "12px"}}>Let's get in touch.</h1>
                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className={"contact-form"}
                >
                    <div className={"contact-inputs-container"}>
                        <input
                            type='text'
                            name='from_name'
                            required={true}
                            placeholder='Name'
                            value={toSend.from_name}
                            onChange={handleChange}
                            className={"contact-input"}
                        />
                        <input
                            type='email'
                            name='reply_to'
                            required={true}
                            placeholder='Email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                            className={"contact-input"}
                        />
                    </div>
                    <textarea
                        type='text'
                        name='message'
                        required={true}
                        value={toSend.message}
                        onChange={handleChange}
                        className={"contact-textarea"}
                    />
                    <button type='submit' className={"contact-form-button"}>Send</button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Contact;
