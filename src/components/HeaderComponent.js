import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component{
    constructor(props){
    super(props); 
    this.state={
        isNavOpen: false,
        isModalOpen: false
    };
}
toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
}
toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}
render() {
    return (
        <React.Fragment>


            <Navbar dark sticky="top" expand="md">
                <div className="container">
                <NavbarBrand className="mr-auto" href="/"><img src="/assets/Mountainlogo.png" height="30" width="30" alt="FastPack Logo" /></NavbarBrand>
            <NavbarToggler onclick ={this.toggleNav} />
                <Collapse isNavOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <i className="fa fa-home fa-lg" />Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/routes">
                                <i className="fa fa-home fa-lg" />Routes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/pricing">
                                <i className="fa fa-home fa-lg" />Prices
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/guides">
                                <i className="fa fa-user-friends" />Guides
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/equipment">
                                <i className="fa fa-home fa-lg" />Equipment
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                <i className="fa fa-home fa-lg" />Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
            </React.Fragment>
    )
    }
}
export default Header;