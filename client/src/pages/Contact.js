import React from 'react'
import Form from "../components/Form/Form";
import Button from "../components/Button/Button";
import image from "../images/Next-Level-Recon-Logo-TEXT-WEB.JPG"
const Contact = () => {
    return (
        <>
            <div>
                <h1>Next-Level-Contact Info</h1>
                <Form />
                {/* <Button /> */}
                <div className="footer-image">
                    <img src={image} alt="" />

                </div>
            </div>

        </>
    )
}

export default Contact
