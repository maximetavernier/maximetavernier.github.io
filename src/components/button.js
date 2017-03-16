/**
 * Created by Tatav on 16/03/2017.
 */
import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <div className="react-button">
                <a href={this.props.url}>
                    <ul>
                        <li><img src={this.props.image} alt={this.props.alt} /></li>
                        <li>{this.props.title}</li>
                    </ul>
                </a>
            </div>
        );
    }
}
