import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className="cards">
            <h1>Check out these informations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={"/images/img-me-small.png"}
                            text="Explore a bit more about me"
                            label="Personal"
                            path="/aboutMe"
                        />
                        <CardItem
                            src={"/images/img-work-eperience.jpg"}
                            text="Check out my work experience"
                            label="Work"
                            path="/workExperience"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={"/images/img-contact.jpg"}
                            text="Find out how to contact me"
                            label="Contact"
                            path="/contact"
                        />
                        <CardItem
                            src={"/images/img-github.jpg"}
                            text="Inspect the source code of this website"
                            label="Code"
                            path="/"
                            externalLink={{exists: true, link: "https://github.com/AlexOlivella/ReactCV"}}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
