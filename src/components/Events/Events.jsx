import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';
import Event from '../Event/Event';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Events.css'
import AOS from 'aos';

const Events = () => {
    const [events,setEvents] = useState([]);
  
    useEffect(()=>{
      AOS.init({
        easing:'ease-in-sine',
        duration: 1000,
        anchorPlacement: 'top-bottom',
        once: true,
      })
    },[])

    useEffect(()=>{
        fetch('/events.json')
            .then((res)=>res.json())
            .then(data=> setEvents(data));
    },[]);

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '40px',
        autoPlay:true,
        autoplaySpeed: 2000,
        nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
        prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
      };

    return (
        <div className='container py-5' data-aos='fade-up'>
            <h1 className="section-header text-center py-4 mb-4">Events & Memories</h1>
            <div>
                {events.length > 0 ?(
                    <Slider {...settings}>
                        {events.map(event=>(
                            <Event key={event.id} event={event}></Event>
                        ))}
                    </Slider>): (
                        <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Events;