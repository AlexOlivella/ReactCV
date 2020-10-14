import React, { Component } from 'react';
import profilePicSmall from '../../Assets/img/FotoCVSmall.png'
import profilePic from '../../Assets/img/FotoCV.png'
import * as commonFunctions from '../../common/functions/functions'


export default class Homepage extends Component {

    componentDidMount(){
        commonFunctions.considerDimensions(window.innerWidth, window.innerHeight)
    }

    render() {
        return (
            <div className="">

                <img src={profilePic} className="profilePic" alt="profilePic"></img>

            </div>
        );
    }
}
