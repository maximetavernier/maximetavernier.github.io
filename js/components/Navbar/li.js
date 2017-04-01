import React from 'react';

export default class Li extends React.Component {
    collapse(event) {
        $(".navbar-collapse").collapse('hide');
    }

    render() {
        return (
            <li>
                <a className="page-scroll" onClick={this.collapse} href={"#react-section-".concat(this.props.id)}>{this.props.title}</a>
            </li>
        );
    }
}