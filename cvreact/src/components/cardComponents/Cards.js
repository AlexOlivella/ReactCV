import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image9 from '../../images/img-9.jpg'
import image2 from '../../images/img-2.jpg'
function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={image9}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/workExperience"
                        />
                        <CardItem 
                            src={image2}
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/contact"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={image9}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/workExperience"
                        />
                        <CardItem 
                            src={image2}
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/contact"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
