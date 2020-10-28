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
                            src={"/images/img-about-me.jpg"}
                            text="Explore a bit more about me"
                            label="Personal"
                            boolLabel={true}
                            externalLink={{}}
                            path="/aboutMe"
                            cardType = "Link"
                        />
                        <CardItem
                            src={"/images/img-work-eperience.jpg"}
                            text="Check out my experience"
                            label="Work"
                            path="/myExperience"
                            boolLabel={true}
                            externalLink={{}}
                            cardType = "Link"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={"/images/img-contact.jpg"}
                            text="Find out how to contact me"
                            label="Contact"
                            path="/contact"
                            boolLabel={true}
                            externalLink={{}}
                            cardType = "Link"
                        />
                        <CardItem
                            src={"/images/img-github.jpg"}
                            text="Inspect the source code of this website"
                            label="Code"
                            path="/"
                            boolLabel={true}
                            cardType = "Link"
                            externalLink={{exists: true, link: "https://github.com/AlexOlivella/ReactCV/tree/main/cvreact"}}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
