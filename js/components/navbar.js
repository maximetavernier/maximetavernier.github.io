import React from "react";

import Li from './Navbar/Li';

export default class Navbar extends React.Component {
    render() {
        const { data } = this.props;

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
                        {data.map((item) =>
                            <Li key={item.id} id={item.id} title={item.title} />
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}