import React, { Component } from 'react';
import Header from './HeaderComponent';
import Landing from './LandingComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Routes from './RouteComponent';
import Pricing from './PriceComponent';
import Guides from './GuideComponent';
import Equipment from './EquipmentComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect, withRouter, } from 'react-router-dom';
import { WHYFASTPACK } from '../shared/whyfastpack';
import { EQUIPMENT } from '../shared/equipment';






class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            whyfastpack: WHYFASTPACK,
            equipment: EQUIPMENT,
        };
    }

    render(){

        const LandingPage =()=>{
            return (
                <Landing />
            );
        };

        const HomePage=()=>{
            return (
                <Home   
                    lightweight={this.state.whyfastpack.filter(lightweight => lightweight.featured)[0]}
                    nostress={this.state.whyfastpack.filter(nostress => nostress.nostress)[0]}
                    enjoythetrip={this.state.whyfastpack.filter(enjoythetrip => enjoythetrip.enjoythetrip)[0]}
                    wesetupcamp={this.state.whyfastpack.filter(wesetupcamp => wesetupcamp.wesetupcamp)[0]}
                    weprovidethemeals={this.state.whyfastpack.filter(weprovidethemeals => weprovidethemeals.weprovidethemeals)[0]}
                    monitoring={this.state.whyfastpack.filter(monitoring => monitoring.monitoring)[0]}
                    prepared={this.state.whyfastpack.filter(prepared => prepared.prepared)[0]}
                />
            );
        };

        const EquipmentPage=()=>{
            return(
                <Equipment
                    basicequipmentplan={this.state.equipment.filter(basicequipmentplan => basicequipmentplan.basicequipmentplan)[0]}
                    premiumequipmentplan={this.state.equipment.filter(premiumequipmentplan => premiumequipmentplan.premiumequipmentplan)[0]}
                    />
            )
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path ='/home' component={HomePage} />
                    <Route path= '/routes' component={Routes}/>  
                    <Route path='/pricing' component={Pricing} />
                    <Route path='/guides'  component={Guides} />
                    <Route path='/equipment' component={EquipmentPage} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to ='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;