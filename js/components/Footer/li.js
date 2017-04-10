import React from 'react';

export default class Li extends React.Component {
    render() {
        const { id } = this.props;
        const { title } = this.props;

        return (
            <li className="list-inline-item">
                <a href={`#react-section-${id}`}>{title}</a>
            </li>
        );
    }
}