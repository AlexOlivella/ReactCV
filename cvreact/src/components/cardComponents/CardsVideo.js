import React from 'react'

import CardVideo from './CardVideo'
import './Cards.css'
function CardsVideo() {
    return (
        <div className="cards">
            <h1>Check this demonstrations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardVideo
                            src={"/videos/video-mygraine.mp4"}
                            text="Okify"
                        />
                        <CardVideo
                            src={"/videos/video-mygraine.mp4"}
                            text="Kowi"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardVideo
                            src={"/videos/video-mygraine.mp4"}
                            text="Mygraine"
                        />
                        <CardVideo
                            src={"/videos/video-mygraine.mp4"}
                            text="Teahelp"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsVideo
