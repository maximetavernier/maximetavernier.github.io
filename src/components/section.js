import React from 'react';

export default class Section extends React.Component {
    constructor() {
        super();
        this.state = {
            side: this.props.side,
            title: this.props.title,
            descr: this.props.descr,
            image: this.props.image,
            url: this.props.url,
        };
    }

    render() {
        return (
            <section className={"react-section-" + this.state.side + "side"} id={this.state.title}>

                <div className="container">
                    <div className="row">
                        <div className={"col-lg-5" + this.state.side === "right" ? " push-lg-7" : ""}>
                            <hr className="react-section-heading-spacer" />
                            <div className="clearfix"></div>
                            <h2 className="react-section-heading">{this.state.title}</h2>
                            <p className="lead">{this.state.descr}</p>
                        </div>
                        <div className={"col-lg-5 " + this.state.side === "right" ? "pull-lg-5" : "offset-lg-2"}>
                            <a href={this.state.url}>
                                <img className="img-fluid" src={this.state.image} alt="" />
                            </a>
                        </div>
                    </div>

                </div>
                <!-- /.container -->
            </section>
        );
    }
}