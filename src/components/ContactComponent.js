import React, { Component } from 'react';
import {  Card, CardImg,  Jumbotron } from 'reactstrap';
import { CONTACTPHOTO } from '../shared/contactphoto';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactPhoto: CONTACTPHOTO,
        }
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron id="contactPage"></Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                    <div className="row row-content align-items-center">
                        <div className="col-sm-4">
                            <h5>Our Address</h5>
                            <address>
                                1 Nucamp Way<br />
                            Seattle, WA 98001<br />
                            U.S.A.
                        </address>
                        </div>
                        <div className="col">
                            <a role="button" className="btn btn-dark" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br /> <br />
                            <a role="button" className="btn btn-dark" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                        </div>
                        <div className="col">
                        <Card>
                            <CardImg src={this.state.contactPhoto[0].image} alt="Contact Image" />
                        </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;