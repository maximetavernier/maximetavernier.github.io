/**
 * Created by Tatav on 16/03/2017.
 */
import React from 'react';

export default class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            img: this.props.img,
            alt: this.props.alt,
            title: this.props.title,
            ref: this.props.ref
        };
    }

    render() {
        return (
            <div className="react-button">
                <a href={this.state.ref}>
                    <ul>
                        <li><img src={this.state.img} alt={this.state.alt} /></li>
                        <li>{this.state.title}</li>
                    </ul>
                </a>
            </div>
        );
    }
}
