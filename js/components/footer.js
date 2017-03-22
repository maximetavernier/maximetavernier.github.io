import React from 'react';

import Separator from './Footer/Separator';
import Li from './Footer/Li';

export default class Footer extends React.Component {
  render() {
    return (
        <div className="container">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="#react-header">Home</a>
                </li>
                <Separator/>
                {this.props.data.map((item) =>
                    <Li key={item.id} id={item.id} title={item.title} />
                )}
            </ul>
            <p className="copyright text-muted small">
                {this.props.copyright}
            </p>
            <p className="powered text-muted small">
                {this.props.powered}
            </p>
        </div>
    );
  }
}