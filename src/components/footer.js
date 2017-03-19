import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
        <footer className="react-footer">
            <div className="container">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="footer-menu-divider list-inline-item">&sdot;</li>
                    <li className="list-inline-item">
                        <a href="#about">About</a>
                    </li>
                    <li className="footer-menu-divider list-inline-item">&sdot;</li>
                    <li className="list-inline-item">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="footer-menu-divider list-inline-item">&sdot;</li>
                    <li className="list-inline-item">
                        <a href="#cv">Curriculum Vitae</a>
                    </li>
                </ul>
                <p className="copyright text-muted small">
                    Copyright &copy; 2017 - Maxime Tavernier. All Rights Reserved.
                </p>
                <p className="powered text-muted small">
                    This website is powered by React.
                </p>
            </div>
        </footer>
    );
  }
}