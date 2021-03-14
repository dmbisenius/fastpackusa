import React, { Component } from 'react';
import Header from './HeaderComponent';
import Landing from './LandingComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect, withRouter, } from 'react-router-dom';



class Main extends Component{

    render(){

        const LandingPage =()=>{
            return (
                <Landing />
            );
        };

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/home' component={Home} />
                    <Route path='/routes' />
                    <Route path='/pricing' />
                    <Route path='/guides' />
                    <Route path='/equipment' />
                    <Route path='/contact' />
                    <Redirect to ='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;