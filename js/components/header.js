import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="intro-message">
          <h1>{this.props.title}</h1>
          <h3>{this.props.subtitle}</h3>
          <hr className="intro-divider" />
        </div>
      </div>
    );
  }
}
