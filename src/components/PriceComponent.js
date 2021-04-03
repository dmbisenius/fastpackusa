import React, { Component } from 'react';
import { CardTitle, Card, CardBody, CardImg, CardText, Jumbotron, Col, Row, CardHeader, CardFooter } from 'reactstrap';

function Pricing() {
    
        return (
            <React.Fragment>
                <Jumbotron id="priceJumbotron"></Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <Card>
                                <CardHeader className="bg-info text-white "><h3>Three Nights</h3></CardHeader>
                                <CardBody>
                                    <CardText>Three nights of immersive experiences. All you need to do is show up for the adventure!</CardText>
                                <CardFooter>$200</CardFooter>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-4">
                            <Card>
                                <CardHeader className="bg-info text-white "><h3>Five Nights</h3></CardHeader>
                                <CardBody>
                                    <CardText>Five nights of immersive experiences. All you need to do is show up for the adventure!</CardText>
                                <CardFooter>$400</CardFooter>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-4">
                            <Card>
                                <CardHeader className="bg-info text-white "><h3>Seven Nights</h3></CardHeader>
                                <CardBody>
                                    <CardText>Seven nights of immersive experiences. All you need to do is show up for the adventure!</CardText>
                                <CardFooter>$1200</CardFooter>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

export default Pricing;