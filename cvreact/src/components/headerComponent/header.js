import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {Button} from '../buttonComponent/Button.js'
import './Header.css'


export default function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? '	fa fa-times' : 'fa fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>About me</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/workExperience" className="nav-links" onClick={closeMobileMenu}>Work experience</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>Contact</Link>

                        </li>
                    </ul>

                    {button && <Button buttonStyle="btn--outline">Contact</Button>}
                </div>
            </nav>
        </>
    );

}
