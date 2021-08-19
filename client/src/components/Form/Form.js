import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import axios from "axios";
import emailjs from "emailjs-com";
import "./Form.css"
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        axios.post("http://localhost:3003/api/customers/create", {
            name: name,
            email: email,
            number: number,
            message: message
        })
            .then(res => {
                console.log("hit")
                console.log(res)
            })
    }

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('nextLevel', 'template_fcy8su9', event.target, 'user_GoDx8GTPhRSPGrbJNHflN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();

    }
    return (
        <form class="contact" onSubmit={sendEmail}>
            <div className="contact-grid">
                <div className="contact-form">
                    <label htmlFor="name" ></label>
                    <input type="text" placeholder="Please enter your name.." onChange={(e) => setName(e.target.value)} name="name" />
                    <label htmlFor="email"></label>
                    <input type="text" placeholder="Please enter your email address" onChange={(e) => setEmail(e.target.value)} name="email" />
                    <label htmlFor="number"></label>
                    <input type="number" placeholder="Please enter your phone number to best reach you at " onChange={(e) => setNumber(e.target.value)} name="number" />
                    <label htmlFor="message"></label>
                    <input className="message" type="text" placeholder="Please leave a detailed message " onChange={(e) => setMessage(e.target.value)} name="message" />

                    <Button color="success" onClick={handleSubmit}>Click here to submit</Button>
                </div>

            </div>

        </form>
    )
}

export default Form
