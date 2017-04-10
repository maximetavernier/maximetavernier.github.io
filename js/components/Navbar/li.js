import React from 'react';

export default class Li extends React.Component {
    collapse(event) {
        $(".navbar-collapse").collapse('hide');
    }

    render() {
        const { id } = this.props;
        const { title } = this.props;

        return (
            <li>
                <a className="page-scroll" onClick={this.collapse} href={`#react-section-${id}`}>{title}</a>
            </li>
        );
    }
}