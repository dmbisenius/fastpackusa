import React, { Component } from 'react';
import { CardTitle, Card, CardImg,  Jumbotron, CardSubtitle } from 'reactstrap';
import { GUIDEPHOTOS } from '../shared/guidephotos';

class Guides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guidePhotos: GUIDEPHOTOS,
        }
    }

        render(){
            return (
                <React.Fragment>
                    <Jumbotron id="guidePage"></Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col mt-5" id="guides" >
                                <h1 ><str>Our experienced guide team has the experience and expertise to make your trip the adventure of a lifetime</str></h1>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-sm mt-5 d-flex justify-content-center">
                                <Card>
                                    <CardImg width="100%" id="guideImg" src={this.state.guidePhotos[0].image} alt="Guide Photo" />
                                    <CardTitle>With Years of Experience</CardTitle>
                                    <CardSubtitle>And thousands of Miles <br></br>we're here to help you every step of the way</CardSubtitle>
                                </Card>
                            </div>
                        </div>
                    </div>
                </React.Fragment>

            )
        }
    }

    export default Guides;