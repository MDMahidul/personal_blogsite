import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedinIn,faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer-basic'>
            <div className="container mx-auto">
                <div>
                    <div className="social text-center py-4">
                        <Link className='footer-icon' to="https://www.facebook.com/mohan91165" target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Link>
                        <Link className='footer-icon' to="https://twitter.com/rmushfiqur" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link>
                        <Link className='footer-icon' to="https://www.linkedin.com/in/mushfiqur-rahman-mohan-196440112/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></Link>
                    </div>
                    <div className="d-flex justify-content-center flex-wrap gap-5 pb-4">
                        <Link className='footer-nav' to="/">Home</Link>
                        <Link className='footer-nav' to="/about">About</Link>
                        <Link className='footer-nav' to="/blogs">Blogs</Link>
                        <Link className='footer-nav' to="/publication">Publications</Link>
                        <Link className='footer-nav' to="/media">Media</Link>
                        <Link className='footer-nav' to="/contact">Contact</Link>
                    </div>
                    <hr className='pb-3'/>
                    <div className='d-flex justify-content-between'>
                        <p className="copyright py-2 text-uppercase">All rights reserved | copyright © 2023 </p>
                        <p className="copyright py-2">POWERED BY TECH WORLD BD </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;