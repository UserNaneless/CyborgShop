import { Component } from 'react';

import "../styles/header.css";

export default class Header extends Component {
    render() {
        return (
            <header className="headerTop container">
                <div className="headerMenuLeft">
                    <a href="/">
                        <img src="src\assets\logo.png" alt="" className="logo" />
                    </a>
                    <input type="text" placeholder="Type something" className="headerInput"/>
                </div>

                <nav className="headerMenuRight">
                    <a href="/" className="menuItem">Home</a>
                    <a href="/browse" className="menuItem">Browse</a>
                    <a href="" className="menuItem">Details</a>
                    <a href="" className="menuItem">Streams</a>
                    <a href="" className="menuItem profileItem">
                        <div className="profile">
                            <span>Profile</span>
                            <img src="src\assets\profile-header.jpg" alt="" className="profileImg"/>
                        </div>
                    </a>
                </nav>
            </header>
        )
    }
}
