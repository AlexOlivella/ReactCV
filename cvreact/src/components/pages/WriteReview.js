import React, { Component } from 'react'
import './WriteReview.css'
import ReactStars from 'react-rating-stars-component'
import * as firebaseFunctions from '../../firebaseAPI/firebaseAPI'

export default class WriteReview extends Component {




    constructor(props) {
        super(props)

        this.state = {
            ratioValue: 0,
            name: "",
            lastName: "",
            company: "",
            position: "",
            review: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    async publishInfo() {
        let result = await firebaseFunctions.publishReview(
            this.state.name,
            this.state.lastName,
            this.state.company,
            this.state.position,
            this.state.review,
            this.state.ratioValue
        )
        if(result === "success"){
            window.location.href = "/"
        }
    }


    handleChange(event) {
        const value = event.target.value;

        this.setState({
            [event.target.name]: value
        })
    }

    render() {
        return (
            <>
                <div className="writeReviews">
                    <h1 className="titleReview">Thank you for dedicate your time to write a review of me</h1>
                    <form className="formReview">
                        <div className="rowInput">
                            <input className="inputReview" value={this.state.name} placeholder="Name" name="name" onChange={this.handleChange} />
                            <input className="inputReview" value={this.state.lastName} placeholder="Last Name" name="lastName" onChange={this.handleChange} />
                        </div>
                        <div className="rowInput">
                            <input className="inputReview" value={this.state.company} placeholder="Company" name="company" onChange={this.handleChange} />
                            <input className="inputReview" value={this.state.position} placeholder="Position" name="position" onChange={this.handleChange} />
                        </div><div className="rowInput">
                            <textarea className="textArea" value={this.state.review} placeholder="Review" name="review" onChange={this.handleChange} />
                        </div>

                    </form>
                    <ReactStars
                        classNames="reactStars"
                        count={5}
                        isHalf={true}
                        size={50}
                        onChange={(ratio) => this.setState({ ratioValue: ratio })}
                    />
                    <button className="btn buttonPublish" onClick={() => this.publishInfo()}>Publish</button>
                </div>
            </>
        )
    }
}
