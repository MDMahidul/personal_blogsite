import React, { useEffect, useRef } from 'react';
import './ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import toast from 'react-hot-toast'; 
import emailjs from '@emailjs/browser';
import AOS from 'aos';

const ContactPage = () => {
  const form = useRef();

  useEffect(()=>{
    AOS.init({
      easing:'ease-in-sine',
      duration: 1000,
      anchorPlacement: 'top-bottom',
      once: true,
    })
  },[])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_17710p5', 'template_0z5h7ui', form.current, 'KPBtEVUTrCGmMAv8V')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        toast.error('Error sending message')
      });
  };

  return (
    <div className='container py-5 mb-5'>
      <div className='mb-4'>
        <h1 className='section-header text-center py-4'>Contact</h1>
        <div className='row contact-card'>
          <div className='col-md-4 sidebar-card d-flex align-items-center text-white' data-aos='fade-right'>
            <div className='sidebar-address'>
              {/* <div className='d-flex mb-4'>
                <FontAwesomeIcon className='address-icon' size='xl' icon={faPhone} />
                <h6>Phone: <br />+88 12345678912</h6>
              </div> */}
              <div className='d-flex mb-4'>
                <FontAwesomeIcon className='address-icon' size='xl' icon={faEnvelope} />
                <h6>Email:<br />chairman@oscl.io</h6>
              </div>
              <div className='d-flex mb-4'>
                <FontAwesomeIcon className='address-icon' size='xl' icon={faLocationDot} />
                <h6>Address:<br />Hashim Tower (4th floor), Suite A-4, 205/1A Gulshan -Tejgaon Link Road, Dhaka-1208</h6>
              </div>
              <div className=''>
                <h5>Follow: </h5>
                <div className='d-flex'>
                  <a href="https://www.facebook.com/mohan91165" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='social-icon contact-page-icon' size='xl' icon={faFacebookSquare} />
                  </a>
                  <a href="https://twitter.com/rmushfiqur" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='social-icon contact-page-icon' size='xl' icon={faTwitterSquare} />
                  </a>
                  <a href="https://www.linkedin.com/in/mushfiqur-rahman-mohan-196440112/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='social-icon contact-page-icon' size='xl' icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 form-card' data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail} action=''>
              <div className='row g-4 mb-4'>
                <div className="col-md">
                  <div className="form-group">
                    <input required type="text" name='name' className="form-control" id="floatingFullName" placeholder="Name" />
                    
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-group">
                    <input required type="email" name='user_mail' className="form-control" id="floatingEmail" placeholder="Email" />
                  
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="form-group">
                  <textarea required name='message' className="form-control" id="floatingTextarea" placeholder="Enter your message" style={{ height: "200px" }}></textarea>
               
                </div>
              </div>
              <button type='submit' className='my-btn'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
