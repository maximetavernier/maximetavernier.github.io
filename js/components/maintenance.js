import React from 'react';

import Footer from './Footer'

export default class Maintenance extends React.Component {
    constructor() {
        super();
        this.state = { message: "This website is currently on works !" };
    }

    render() {
        return (
            <div className="maintenance-block">
                <div className="maintenance-msg">
                    {this.state.message}
                </div>
                <Footer />
            </div>
        );
    }
}