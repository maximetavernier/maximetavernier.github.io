import React from 'react';

export default class Section extends React.Component {
    render() {
        const { data } = this.props;
        const { side } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className={`col-md-6 ${side.localeCompare("right") === 0 ? "col-sm-7" : "col-sm-5"}`}>
                        <hr className="react-section-heading-spacer" />
                        <div className="clearfix"></div>
                        <h2 className="react-section-heading">{data.title}</h2>
                        <p className="lead justified">{data.descr}</p>
                    </div>
                    <div className={`react-section-image-url col-md-6 ${side.localeCompare("right") === 0 ? "col-sm-5" : "col-sm-7"}`}>
                        <a href={data.url} target="_blank">
                            <img className="img-fluid" src={data.image} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}