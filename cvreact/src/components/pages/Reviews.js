import React, { Component } from 'react'
import * as firebaseFunctions from '../../firebaseAPI/firebaseAPI'
import './Reviews.css'
import ReviewCard from '../cardComponents/ReviewCard';

export default class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []


        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        let data = await firebaseFunctions.getReviews()
        this.setState({ reviews: data })
    }

    render() {
        return (
            <>
                <div className="review--container">
                    <ul className="review--list">
                        {this.state.reviews.length > 0 ? this.state.reviews.map((value, index) => {
                            return (
                                <ReviewCard
                                    key={index}
                                    name={value.name}
                                    lastName={value.lastName}
                                    company={value.company}
                                    position={value.position}
                                    ratio={value.ratio}
                                    reviewDescription={value.review}
                                />
                            )
                        }):
                        <h1 className="noReviews">There are no reviews yet</h1>}

                    </ul>
                </div>
            </>
        )
    }
}
