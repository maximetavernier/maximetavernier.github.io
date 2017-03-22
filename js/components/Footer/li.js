import React from 'react';

export default class Li extends React.Component {
    render() {
        return (
            <li className="list-inline-item">
                <a href={"#react-section-".concat(this.props.id)}>{this.props.title}</a>
            </li>
        );
    }
}