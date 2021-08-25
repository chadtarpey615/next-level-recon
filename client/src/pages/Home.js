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
        <div className="main" id="home">
            <h1>Next Level Recon</h1>

        </div>
    )
}

export default Home
