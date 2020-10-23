import React from 'react';
import '../../App.css'
import CardsVideo from '../cardComponents/CardsVideo';
import './MyExperience.css'


export default function MyExperience() {

    return (
        <>
            <div className="myExperience">
                <div className="myExperienceDiv">
                    <div className="titleDiv">
                        <span className="titleMyExperience"><b>My work experience</b></span>
                    </div>
                    <div className="contactMethods">
                        <div className="rowJob">

                            <div className="OkifyIcon"></div>
                            <div className="jobData">
                                <span className="jobPosition">Front end developer</span>
                                <span className="companyName">Okify - Full time</span>
                                <span className="dates">June 2020 - October 2020</span>
                            </div>
                        </div>
                        <div className="rowJob">

                            <div className="KowiIcon"></div>
                            <div className="jobData">
                                <span className="jobPosition">Front end developer</span>
                                <span className="companyName">Kowi - Full time</span>
                                <span className="dates">March 2020 - June 2020</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        
            <CardsVideo/>
        </>

    );

}
