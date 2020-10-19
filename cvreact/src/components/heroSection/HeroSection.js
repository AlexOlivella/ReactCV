import React from 'react'
import '../../App.css'
import { Button } from '../buttonComponent/Button'
import './HeroSection.css'

function HeroSection() {

    function scrollToDiv(){
        let offsetTop = document.getElementsByClassName("cards")[0].offsetTop;
        window.scrollTo({
            top: offsetTop - 40,
            behavior: "smooth"
        });
    };

    return (
        <div className="hero-container">
            {/* <video src={video2} autoPlay loop muted /> */}
            <h1>Hey I'm Àlex Olivella</h1>
            <p>Let me introduce myself</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    linkTo="/aboutMe"
                >
                    GET STARTED
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    linkTo="/"
                    onClick={scrollToDiv}
                >
                    MORE INFO <i className="fa fa-link" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
