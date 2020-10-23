import React from 'react'
import './CardsVideo.css'

function CardVideo(props) {


    return (
        <>
            <li className="cards__item">
                <div className="cards__video__container">
                    <div className="video_container">
                        <video
                            className="videoPlay"
                            onMouseOver={event => event.target.play()}
                            onMouseOut={event => event.target.load()}
                            src={props.src}
                            crossOrigin="anonymous"
                            loop
                            muted
                        />
                    </div>
                    <div className="cards__video__info">
                        <h5 className="cards__item__text">
                            {props.text}
                        </h5>
                    </div>


                </div>

            </li>
        </>
    )
}

export default CardVideo
