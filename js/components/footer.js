import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
        <div className="container">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="#react-header">Home</a>
                </li>
                <li className="footer-menu-divider list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <a href="#react-section-about">About</a>
                </li>
                <li className="footer-menu-divider list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <a href="#react-section-portfolio">Portfolio</a>
                </li>
                <li className="footer-menu-divider list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <a href="#react-section-activity">Activity</a>
                </li>
            </ul>
            <p className="copyright text-muted small">
                {this.props.copyright}
            </p>
            <p className="powered text-muted small">
                {this.props.powered}
            </p>
        </div>
    );
  }
}