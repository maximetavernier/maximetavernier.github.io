import React from 'react';

export default class Li extends React.Component {
    render() {
        return (
            <li>
                <a className="page-scroll" href={"#react-section-".concat(this.props.id)}>{this.props.title}</a>
            </li>
        );
    }
}