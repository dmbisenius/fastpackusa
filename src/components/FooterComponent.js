import React from 'react';
import {Link} from 'react-router-dom'

function Footer(props){
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-3 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/routes'>Routes</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/guides'>Guides</Link></li>
                        <li><Link to='/equipment'>Equipment</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <h5>Social</h5>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                </div>
                <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+1800fastpack"><i className="fa fa-phone" /> 1-800-fast-pack</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> info@fastpackusa.co</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 