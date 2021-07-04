import React, { useState } from 'react';
import Button from "../Button/Button"
import "./Form.css"
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <form>
            <label htmlFor="name" ></label>
            <input type="text" placeholder="Please enter your name.." onChange={handleChange} />
            <label htmlFor="email"></label>
            <input type="text" placeholder="Please enter your email address" onChange={handleChange} />
            <label htmlFor="number"></label>
            <input type="number" placeholder="Please enter your phone number to best reach you at " onChange={handleChange} />
            <Button />
        </form>
    )
}

export default Form
