import React from "react";
import $ from "jquery";

import Li from './Navbar/Li';

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            list: this.getNavbarMenu()
        }
    }

    getNavbarMenu() {
        return $.get('../assets/' + (navigator.language || navigator.userLanguage) + '.json', function(json) {
            var menu = $.parseJSON(json).menu;
            var list = menu.map((item) =>
                <Li id={item.id} title={item.title} />
            );
            return list;
        }, 'text');
    }

    render() {
        return (
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        Menu <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand page-scroll" href="#react-header">
                        <i className="fa fa-play-circle"></i> <span className="light">maximetavernier.github.io</span>
                    </a>
                </div>
                <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul className="nav navbar-nav">
                        <li className="hidden">
                            <a href="#react-header"></a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#react-section-about">About</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#react-section-portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#react-section-activity">Activity</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}