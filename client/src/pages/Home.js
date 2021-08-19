import React, { useEffect } from 'react';
import TweenLite from "gsap";
import gsap from "gsap"
import image from "./../images/Next-Level-Recon-Logo-TEXT-WEB.JPG"

const Home = () => {
    const homePage = document.getElementsByClassName("home-image");
    // const message = document.getElementById("title");
    // useEffect(() => {
    //     // TweenLite.to(homePage, 1, { x: 100, y: 100 });
    //     setTimeout(() => {
    //         // document.getElementById("title").classList.remove("hide")
    //         // document.getElementById("title1").classList.remove("hide")
    //         // document.getElementById("title2").classList.remove("hide")
    //         // document.getElementById("title3").classList.remove("hide")
    //         gsap.to("#title", { opacity: 1 });
    //         gsap.to("#title1", { opacity: 1, delay: 4 });
    //         gsap.to("#title2", { opacity: 1, delay: 8 });
    //         gsap.to("#title3", { opacity: 1, delay: 12.5 });

    //         gsap.to("#title", { x: "100%", opacity: 1, duration: 3.5, delay: 2.5 });
    //         gsap.to("#title1", { x: "-100%", duration: 3.5, delay: 6 });
    //         gsap.to("#title2", { x: "100%", duration: 3.5, delay: 11 });
    //         gsap.to("#title3", { x: "-100%", duration: 3.5, delay: 16 });




    //     }, 2000)

    //     setTimeout(() => {
    //         document.getElementById("image").classList.remove("hide")
    //         gsap.from(".home-image", { duration: 3, scale: 4, })

    //     }, 19000)



    // })
    return (
        <div className="main">
            {/* <h1>Home page for all the work you have done and work that you could for future business!!!!!!!!</h1> */}
            <img className="home-image hide" id="image" src={image} alt="company logo" />
            <h1 className="hide" id="title">Welcome to the website of the best mobile painter in the greater middle Tennessee area!!!!</h1>
            <h1 className="hide" id="title1">I've been working in this business for the past 17 years!!!!</h1>
            <h1 className="hide" id="title2">I've have experiences at the dealership working hand to hand with the GM doing complimentary work on his vehicles on the lot!!!!</h1>
            <h1 className="hide" id="title3">I also have multiple years of experience working in the body shop, if its pretty banged up good chance a can still repair the damage!!!</h1>
        </div>
    )
}

export default Home
