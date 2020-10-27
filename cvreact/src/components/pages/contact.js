import React from 'react';
import './Contact.css'

export default function Contact() {

    function goToDirection(link) {
        window.open(
            link,
            '_blank'
        );
    }
    return (
        <>
            <div className="contact">

                <div className="contactDiv">
                    <div className="titleContainer">
                        <span className="titleContactMe">Contact me</span>
                    </div>
                    <div className="contactMethods">
                        <div className="rowContact">
                            <div className="iconTitleDiv">
                                <div className="gmailIcon"></div>
                                <span className="title"><b>Gmail:</b></span>
                            </div>
                            <a className="linkText" href="/contact" onClick={() => goToDirection("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlqhkGgLwZdjKgSdcGwwxfrFLPHBQccJSnjsvdBTxmSDnWMgvsgTbjpqdfgvgkZgVNQlq")}>alex.olivellaa@gmail.com</a>
                        </div>
                        <div className="rowContact">
                            <div className="iconTitleDiv">
                                <div className="linkedinIcon"></div>
                                <span className="title"><b>Linkedin:</b></span>
                            </div>
                            <a className="linkText" href="/contact" onClick={() => goToDirection("https://www.linkedin.com/in/%C3%A0lex-olivella-051b661b8/")}>linkedin.com/in/àlex-olivella-051b661b8/</a>
                        </div>
                        <div className="rowContact">
                            <div className="iconTitleDiv">
                                <div className="phoneIcon"></div>
                                <span className="title"><b>Phone:</b></span>
                            </div>
                            <span className="text">+34 633873567</span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );

}

