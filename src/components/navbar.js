import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                    <a className="navbar-brand" href="https://maximetavernier.github.io">maxime.github.io</a>
                    <div className="collapse navbar-collapse" id="navbarExample">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cv">Curriculum Vitae</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}