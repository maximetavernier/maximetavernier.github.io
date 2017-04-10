import React from 'react';

import Separator from './Footer/Separator';
import Li from './Footer/Li';

export default class Footer extends React.Component {
  render() {
      const { data } = this.props;
      const { copyright } = this.props;
      const { powered } = this.props;
      let list = [];

      data.map((item) => {
          list.push(<Separator/>);
          list.push(<Li key={item.id} id={item.id} title={item.title}/>);
      });
      return (
        <div className="container">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="#react-header">Home</a>
                </li>
                {list}
            </ul>
            <p className="copyright text-muted small">
                {copyright}
            </p>
            <p className="powered text-muted small">
                {powered}
            </p>
        </div>
      );
  }
}