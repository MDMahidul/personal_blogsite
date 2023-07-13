import React, { useState, useEffect } from 'react';
import './Publications.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import AOS from 'aos';

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [selectedPublication, setSelectedPublication] = useState(null);

  useEffect(() => {
    fetch('/publications.json')
      .then((res) => res.json())
      .then((data) => {
        const firstThreePublications = data.slice(0, 3);
        setPublications(firstThreePublications);
      });
  }, []);

  useEffect(()=>{
    AOS.init({
      easing: 'ease-in-sine',
      duration: 1000,
      anchorPlacement: 'top-bottom',
      once:true,
    })
  },[])

  const handlePublicationClick = (publication) => {
    setSelectedPublication(publication);
  };

  const handleCloseModal = () => {
    setSelectedPublication(null);
  };

  return (
    <div className='container' data-aos='fade-up'>
      <h1 className='text-center py-5 mt-5 section-header'>Publications</h1>
      <div className='row'>
        {publications.map((publication) => (
          <div key={publication.id} className='col-md-4'>
            <div className='card publication-card p-2 mb-3'>
              <div className='row g-0'>
                <div className='col-lg-4'>
                  <img
                    src={publication.image}
                    className='img-fluid rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-lg-8'>
                  <div className='card-body'>
                    <p className='card-title'>
                      <b>Title:</b>{' '}
                      <Link
                        className='book-name'
                        onClick={() => handlePublicationClick(publication)}
                      >
                        {publication.name}
                      </Link>
                    </p>
                    <p className='card-text'>
                      <b>Category:</b> {publication.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center'>
        <Link to='/publication' className='my-btn'>
          See More
        </Link>
      </div>

      <Modal  size="lg" show={selectedPublication !== null} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="modal-header-no-border">
        </Modal.Header>
        <Modal.Body>
          <div className="card p-3 m-2 mb-4">
                        <div className="row">
                            <div className="col-md-5 ">
                               <p className='border-bottom pb-2'><b>Title: </b>{selectedPublication?.name}</p>
                               <p className='border-bottom pb-2'><b>Author: </b>{selectedPublication?.author}</p>
                               <p className='border-bottom pb-2'><b>Category: </b>{selectedPublication?.type}</p>
                               <p className='border-bottom pb-2'><b>Edition: </b>{selectedPublication?.date}</p>
                               <p className='border-bottom pb-2'><b>Publisher: </b>{selectedPublication?.publisher}</p>
                               <p><b>Language: </b>{selectedPublication?.language}</p>
                            </div>
                            <div className="col-md-7"><img className='publicationPage-img' src={selectedPublication?.image} alt="" /></div>
                        </div>
                    </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Publications;
