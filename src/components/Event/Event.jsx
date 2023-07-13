import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import './Event.css'

const Event = ({event}) => {
    const {id,src,caption} = event;
    const [selectedImage,setSelectedImage] = useState(null);
    const [showModal,setShowModal] = useState(false);

    const handleImageClick = (image)=>{
        setSelectedImage(image);
        setShowModal(true);
    }

    const handleCloseModal = ()=>{
        setShowModal(false);
    }

    return (
        <div>
           <div>
           <img onClick={()=> handleImageClick(src)} className='w-75' src={src} alt="" />
           </div>
            <div>
            <Modal  size="xl" show={showModal} onHide={handleCloseModal} modal-dialog-centered centered>
                <Modal.Header closeButton className="modal-header-no-border">

                </Modal.Header>
                <Modal.Body className='modal-img text-center'>
                <img src={selectedImage} alt='Selected Image' />
                <h6 className='mt-3'>{caption}</h6>
                </Modal.Body>
            </Modal>
            </div>
        </div>
    );
};

export default Event;