import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className="react-header">
        <div className="container">
          <div className="intro-message">
            <h1>Maxime Tavernier</h1>
            <h3>Activity hub</h3>
            <hr className="intro-divider" />
          </div>
        </div>
      </header>
    );
  }
}
