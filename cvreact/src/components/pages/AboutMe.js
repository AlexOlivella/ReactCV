import React from 'react'
import './AboutMe.css'
import '../cardComponents/Cards.css'
import CardItem from '../cardComponents/CardItem'

function AboutMe() {
    return (
        <>
            <div className="aboutMe">
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <div className="imgContainer">
                            </div>
                            <div className="infoContainer">
                                <span className="text"><b>Name:</b> Àlex Olivella Morató</span>
                                <span className="text"><b>Birthdate:</b> 31/03/1997</span>
                                <span className="text"><b>Street:</b> Nou</span>
                                <span className="text"><b>Number:</b> 63</span>
                                <span className="text"><b>City:</b> Sant Pere de Riudebitlles</span>
                                <span className="text"><b>Zipcode:</b> 08776</span>

                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="education">
                <h1 >Education</h1>
                <div className="cards__container__small">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem
                                src={"/images/img-degree.png"}
                                text="Bachelor's degree in Informatics Engineering | 2020 | FIB-UPC. Major in Software Engineering"
                                label=""
                                boolLabel={false}
                                path="/aboutMe"
                                externalLink={{exists: true, link: "https://www.upc.edu/en/bachelors/informatics-engineering-barcelona-fib"}}

                            />
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutMe
