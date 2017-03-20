import React from 'react';

export default class Section extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className={"col-lg-5".concat(this.props.side.localeCompare("right") == 0 ? " push-lg-7" : "")}>
                        <hr className="react-section-heading-spacer" />
                        <div className="clearfix"></div>
                        <h2 className="react-section-heading">{this.props.title}</h2>
                        <p className="lead">{this.props.descr}</p>
                    </div>
                    <div className={"col-lg-5 ".concat(this.props.side.localeCompare("right") == 0 ? "pull-lg-5" : "offset-lg-2")}>
                        <a href={this.props.url}>
                            <img className="img-fluid" src={this.props.image} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}