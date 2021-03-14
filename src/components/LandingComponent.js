import React from 'react';
import { Jumbotron, Button, } from 'reactstrap';
import {Link} from 'react-router-dom'

function Landing () {
    return(
    
            <Jumbotron id="landingPage">
                <h1>Explore, Nature</h1>
                <p>
                    Escape in a way you never knew was possible
                </p>
            <Link to='/home'>
            <Button color="success">Explore</Button>
            </Link>
            </Jumbotron>
      
    );
}
export default Landing;