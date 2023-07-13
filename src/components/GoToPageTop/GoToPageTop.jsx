import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './GoToPageTop.css'

const GoToPageTop = () => {
    const [isVisible,setIsVisible] = useState(false);

    const toggleVisibility = () =>{
        if(window.pageYOffset >300){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility);
        return ()=>{
            window.removeEventListener('scroll',toggleVisibility);
        };
    },[]);

    return (
        <div>
            <button className={`topbtn-pos  ${ isVisible ? 'opacity-100 goup-btn' : 'opacity-0'}`} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faChevronUp} size='lg'></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default GoToPageTop;