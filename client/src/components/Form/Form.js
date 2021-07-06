import React, { useState } from 'react';
import Button from "../Button/Button";
import axios from "axios"
import "./Form.css"
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (event) => {
        axios.post("http://localhost:3001/api/customers/create", {
            name: name,
            email: email,
            number: number
        })
            .then(res => {
                console.log("hit")
                console.log(res)
            })
    }
    return (
        <form>
            <label htmlFor="name" ></label>
            <input type="text" placeholder="Please enter your name.." onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email"></label>
            <input type="text" placeholder="Please enter your email address" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="number"></label>
            <input type="number" placeholder="Please enter your phone number to best reach you at " onChange={(e) => setNumber(e.target.value)} />
            {/* <Button onClick={handleSubmit} /> */}
            <button onClick={handleSubmit}>click me </button>
        </form>
    )
}

export default Form
