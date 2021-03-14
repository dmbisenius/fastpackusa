import React, { Component } from 'react';
import { CardTitle, Jumbotron, Card, CardBody, CardHeader, CardImg, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Col, Row, InputGroup, CardSubtitle, CardImgOverlay } from 'reactstrap';
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
                    <div className="row">
                        <div className="col-sm-6">
                            <h1>Maximum Experience</h1>
                            <h2>Minimum Weight</h2>
                        </div>
                        <div className="col-sm-6">
                            <Card>
                                <CardImg src={this.state.photos.image} width='100%' alt="Hiking" />
                            </Card>
                        </div>
                    </div>
                    <span className="navbar-text ml-auto">
                        <Button type="button" color="secondary" onClick={this.toggleModal}>Reserve Now</Button>
                    </span>
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