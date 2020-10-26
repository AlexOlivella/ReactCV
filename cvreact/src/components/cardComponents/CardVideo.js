import React from 'react'
import './CardsVideo.css'
import VideoPlayer from '../videoPlayer/VideoPlayer'

function CardVideo(props) {


    // let stats = true
    // function playPause(ev){
    //     if(stats){
    //         ev.target.play()
    //         stats = false
    //     }
    //     else {
    //         ev.target.pause()
    //         stats = true
    //     }
    //     console.log(stats)
    // }




    return (
        <>
            <li className="cards__item">
                <div className="cards__video__container" >

                    <VideoPlayer src={props.src}></VideoPlayer>




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
