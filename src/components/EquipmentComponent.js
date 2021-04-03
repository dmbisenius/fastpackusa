import React, { Component } from 'react';
import { CardTitle, Card, CardImg,  Jumbotron, CardSubtitle, CardFooter, CardBody, CardHeader, CardText } from 'reactstrap';


class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

        render(){
            return (
                <React.Fragment>
                    <Jumbotron id="equipmentPage"></Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5" id="guides" >
                                <h1 ><str>We Have an Array of Equipment Options to Choose From</str></h1>
                            </div>
                                <div className="col mt-5">
                                <EquipmentCard basicequipmentplan={this.props.basicequipmentplan} premiumequipmentplan={this.props.premiumequipmentplan} />
                            </div>
                        </div>
                    </div>
                </React.Fragment>

            )
        }
    }

    function RenderCard({ item }) {
        return (
            <Card>
                <CardBody>
                    <CardHeader className="bg-info text-white">{item.name}</CardHeader>
                    <CardText>{item.comment}</CardText>
                    <CardFooter>{item.price}</CardFooter>
                </CardBody>
            </Card>
        );
    }

    function EquipmentCard(props){
        return (
            <div className="container">
                <div className="row" id="equipmentplan">
                    <div className="col-md">
                        <RenderCard item={props.basicequipmentplan} />
                    </div>
                    <div className="col-md">
                        <RenderCard item={props.premiumequipmentplan} />
                    </div>
                </div>
            </div>
        )
    }

    export default Equipment;