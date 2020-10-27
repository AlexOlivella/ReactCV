import React from 'react'
import ReactStars from 'react-rating-stars-component'
import '../pages/Reviews.css'

function ReviewCard(props) {
    return (
        <>
            <li className="review--card">
                <span className="review--text--name">
                    {props.name} {props.lastName}
                </span>
                <span className="review--text--company">
                    {props.company} - {props.position}
                </span>
                <ReactStars
                    edit={false}
                    value={props.ratio}
                    size={20}
                    isHalf={true}
                ></ReactStars>
                <span className="review--text--description">
                    {props.reviewDescription}
                </span>
            </li>

        </>
    )
}

export default ReviewCard
