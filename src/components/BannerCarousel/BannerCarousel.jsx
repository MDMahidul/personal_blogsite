import React from 'react';
import header from '/headeroic.jpg';
import { Carousel } from 'react-bootstrap';
import './BannerCarousel.css'
import mlogo from '/organizations/logo.webp'
import bridge from '/organizations/bridge.png'
import jubo from '/organizations/jubo.webp'
import oscl from '/organizations/oscl.png'
import bpl from '/organizations/bpl.webp'
import squash from '/organizations/squash.png'


const BannerCarousel = () => {
    return (
        <div className='container banner-container mx-auto py-4'>
  <div className="row banner-container">
    <div className="col-md-7 text-center">
      <img className='w-75 mx-auto img-fluid rounded' src={header} alt="" />
    </div>
    <div className="col-md-5 mt-4 d-flex align-items-center justify-content-center flex-column text-center">
      <div>
        <p className='mb-3 chairman-name'>Mushfiqur Rahman Mohan</p>
      </div>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner items-self-center" style={{ height: '200px' }}>
          <div className="carousel-item " >
            <h6>Chairman Of <br></br> <span className='organization-name'>Mohan Group</span></h6>
            <img className='w-25 h-100 img-fluid' src={mlogo} alt="" />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <h6>Chairman Of <br></br> <span className='organization-name'>Overseas Study Counseling Ltd.</span></h6>
            <img className='w-25 h-100 img-fluid' src={oscl} alt="" />
          </div>
          <div className="carousel-item active" data-bs-interval={3000}>
            <h6>Former Sports Secretary Of <br></br> <span className='organization-name'>Bangladesh Awami Jubo League</span></h6>
            <img className='w-25 h-100 img-fluid' src={jubo} alt="" />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <h6>One of the Founding Member Of <br></br> <span className='organization-name'>Bangladesh Premier League</span></h6>
            <img className='w-25 h-100 img-fluid' src={bpl} alt="" />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <h6>Former President Of <br></br> <span className='organization-name'>Bangladesh Bridge Federation</span></h6>
            <img className='w-25 h-100 img-fluid ' src={bridge} alt="" />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <h6>Former President Of <br></br> <span className='organization-name'>Bangladesh Squash Rackets Federation-BSRF</span></h6>
            <img className='w-25 h-100 img-fluid' src={squash} alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>

    );
};

export default BannerCarousel;