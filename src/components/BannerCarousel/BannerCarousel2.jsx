import React from 'react';
import './BannerCarousel.css'
import { Carousel } from 'react-bootstrap';
import header from '/headeroic.jpg';
import mlogo from '/organizations/logo.webp'
import bridge from '/organizations/bridge.png'
import jubo from '/organizations/jubo.webp'
import oscl from '/organizations/oscl.png'
import bpl from '/organizations/bpl.webp'
import squash from '/organizations/squash.png'

const BannerCarousel2 = () => {
    return (
        <div className='container banner-container mx-auto py-4'>
            <div className="row banner-container">
                <div className="col-md-7 text-center" data-aos='fade-right'>
                    <img className='w-75 mx-auto img-fluid rounded' src={header} alt="" />
                </div>
                <div className="col-md-5 mt-4 d-flex align-items-center justify-content-center flex-column text-center" data-aos='fade-left'>
                    <div>
                        <p className='mb-3 chairman-name'>Mushfiqur Rahman Mohan</p>
                    </div>
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                        <Carousel>
                            <Carousel.Item interval={3000} >
                                <div>
                                    <h6>Chairman Of <br></br> <span className='organization-name'>Mohan Group</span></h6>
                                </div>
                                <img src={mlogo} className='w-25 img-fluid' alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} >
                                <div>
                                    <h6>Chairman Of <br></br> <span className='organization-name'>Overseas Study Counseling Ltd.</span></h6>
                                </div>
                                <img src={oscl} className='w-25 img-fluid' alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} >
                                <div>
                                    <h6>Former Sports Secretary Of <br></br> <span className='organization-name'>Bangladesh Awami Jubo League</span></h6>
                                </div>
                                <img src={jubo} className='w-25 img-fluid' alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} >
                                <div>
                                    <h6>One of the Founding Member Of <br></br> <span className='organization-name'>Bangladesh Premier League</span></h6>
                                </div>
                                <img src={bpl} className='w-25 img-fluid' alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} >
                                <div>
                                    <h6>Former President Of <br></br> <span className='organization-name'>Bangladesh Bridge Federation</span></h6>
                                </div>
                                <img src={bridge} className='w-25 img-fluid' alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} >
                                <div>
                                    <h6>Former President Of <br></br> <span className='organization-name'>Bangladesh Squash Rackets Federation-BSRF</span></h6>
                                </div>
                                <img src={squash} className='w-25 img-fluid' alt="" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel2;
