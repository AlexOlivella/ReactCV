import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">About me</Link>
                        </li>
                        <li>
                            <Link to="/WorkExperience">Work experience</Link>

                        </li>
                        <li className="last">
                            <Link to="/Contact">Contact</Link>

                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;