import React, { Component } from 'react';
import { CardTitle, Jumbotron, Card, CardBody, CardImg, CardText, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Col, Row} from 'reactstrap';
import DatePicker from "react-datepicker";
import { PHOTOS } from '../shared/photos';
import "react-datepicker/dist/react-datepicker.css";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            photos: PHOTOS,
        };
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        this.props.postQuery(values);
    };
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron id="homePage"></Jumbotron>
                <div className="container">
                    <div className="row" id="oldrow">
                        <div className="col-sm-6 mt-5">
                            <h1>Maximum Experience</h1>
                            <h1>Minimum Weight</h1>
                            <Button type="button" color="secondary" onClick={this.toggleModal}>Reserve Now</Button>
                        </div>
                        <div className="col-sm-6">
                            <Card>
                                <CardImg src={this.state.photos[0].image} width='100%' alt="Hiking" />
                            </Card>
                        </div>
                    </div>
                    <div className="row"  id="oldrow" >
                        <div className="col mt-5 text-center">
                            <h2><strong>Whether your shooting for a new FKT, or just want to enjoy the beauty of nature without the burden of a heavy pack, FastPacking USA can help you accomplish your goals!</strong></h2>
                        </div>
                    </div>
                    <div className="row" id="whyfastpackinfo">
                        <div className="col-12 text-center">
                            <h3><strong>Why FastPack?</strong></h3>
                            <strong>We follow along and do all the hard work. All you need to do is walk!</strong>
                        </div>
                    </div>
                    <div className='col'>
                        <AddCard lightweight={this.props.lightweight} nostress={this.props.nostress} enjoythetrip={this.props.enjoythetrip} />
                    </div>
                    <div className='row' id='howtofastpack'>
                        <div className="col-12 mt-5 text-center">
                            <h3><strong>How to Fast Pack?</strong></h3>
                            <strong>We follow along and do all the hard work. All you need to do is walk!</strong>
                        </div>
                    </div>
                    <div>
                        <div className="row" id="whyfastpack" >
                            <div className='col'>
                                <AddAnotherCard wesetupcamp={this.props.wesetupcamp} weprovidethemeals={this.props.weprovidethemeals} monitoring={this.props.monitoring} prepared={this.props.prepared} />
                            </div>
                        </div>
                    </div>
                </div>



                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} contentClassName="custom-modal-style">
                    <ModalHeader toggle={this.toggleModal}>Reservation Form</ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup row>
                                <Label for="name" md={4}>Name</Label>
                                <Col md={8}>
                                    <Input type="name" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="numberOfhikers" md={4}>Number of Hikers</Label>
                                <Col md={8}>
                                    <Input type="number" name="numberOfhikers" id="numberOfhikers" placeholder="0" value={this.state.numberOfguests} onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="routes" md={4}>Desired Route</Label>
                                <Col md={8}>
                                    <select name="routes" className="form-control" id="routes" value={this.state.routes} onChange={this.handleInput}>
                                        <option value="azt">Arizona Trail</option>
                                        <option value="ct">Colorado Trail</option>
                                        <option value="wt">Wonderland Trail</option>
                                        <option value="custom">Custom Trip</option>
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="startDate" md={4}>Select Your Start Date</Label>
                                <Col md={8}>

                                    <MyDatepickerComponent
                                        className="form-control"
                                        name="startDate"
                                        id="startDate"
                                        size="large"
                                        value={this.state.startDate}
                                        onChange={this.handleChange}
                                        selected={this.state.startDate}
                                        showTimeSelect
                                        dateFormat="MM/dd/yyyy  EE hh:mm a"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="days" md={4}>Number of days?</Label>
                                <Col md={8}>
                                    <select name="days" className="form-control" id="days" value={this.state.days} onChange={this.handleInput}>
                                        <option value="3">3</option>
                                        <option value="5">5</option>
                                        <option value="7">7</option>
                                        <option value="7+">More than 7?</option>
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="equipment" md={4}>Do you need to rent equipment?</Label>
                                <Col md={8}>
                                    <select name="equipment" className="form-control" id="equipment" value={this.state.equipment} onChange={this.handleInput}>
                                        <option value="yes">yes</option>
                                        <option value="no">no</option>
                                    </select>
                                </Col>
                            </FormGroup>
                            <Col md={{ offset: 4 }}>
                                <Button type="submit" value="submit" offset="4" color="primary">
                                    Submit Query</Button>
                            </Col>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} class="rounded mx-auto d-block" />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.comment}</CardText>
            </CardBody>
        </Card>
    );
}

function AddCard(props) {


    return (
        <div className="container">
            <div className="row" id="whyfastpack">
                <div className="col-md">
                    <RenderCard item={props.lightweight} />
                </div>
                <div className="col-md">
                    <RenderCard item={props.nostress} />
                </div>
                <div className="col-md">
                    <RenderCard item={props.enjoythetrip} />
                </div>
            </div>
        </div>
    );
}

function AddAnotherCard(props) {


    return (
        <div className="container">
            <div className="row" id="whyfastpack">
                <div className="col-md">
                    <RenderCard item={props.wesetupcamp} />
                </div>
                <div className="col-md">
                    <RenderCard item={props.weprovidethemeals} />
                </div>
                <div className="col-md">
                    <RenderCard item={props.monitoring} />
                </div>
                <div className="col-md">
                    <RenderCard item={props.prepared} />
                </div>
            </div>
        </div>
    );
}


class MyDatepickerComponent extends Component {

    state = {
        startDate: new Date()
    };

    handleSelect = (date, event) => {
        console.log('onSelect', date, event);
    };
    handleChange = (date, event) => {
        console.log('onChange', date, event);
        this.setState({
            startDate: date
        });
    };
    handleBlur = (event) => {
        console.log('onBlur', event);
    };
    handleFocus = (event) => {
        console.log('onFocus', event);
    };
    handleCalendarClose = () => {
        console.log('CalendarClose');
    };
    handleCalendarOpen = () => {
        console.log('CalendarOpen');
    };
    handleWeekSelect = (firstDayOfWeek, weekNumber, event) => {
        console.log('on', firstDayOfWeek, weekNumber, event);
    };
    handleMonthChange = (date) => {
        console.log('onMonthChange', date);
    };
    handleYearChange = (date) => {
        console.log('onYearChange', date);
    };
    handleDayMouseEnter = (date) => {
        console.log('onDayMouseEnter', date);
    };

    render() {

        return (
            <Row>
                <Col md={8}>
                    <DatePicker
                        onSelect={() => this.handleSelect}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        onCalendarClose={this.handleCalendarClose}
                        onCalendarOpen={this.handleCalendarOpen}
                        onWeekSelect={this.handleWeekSelect}
                        onMonthChange={this.handleMonthChange}
                        onYearChange={this.handleYearChange}
                        onDayMouseEnter={this.handleDayMouseEnter}
                        selected={this.state.startDate}
                    />
                </Col>
            </Row>
        )
    };
}




export default Home;