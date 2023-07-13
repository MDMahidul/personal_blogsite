import React, { useState,useEffect } from 'react';
import './MediaCoverage.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const MediaCoverage = () => {
    const [medias,setMedia] = useState([]);

    useEffect(() => {
        fetch('/media.json')
          .then((res) => res.json())
          .then((data) => {
            const firstThreeMedia = data.slice(0, 6);
            setMedia(firstThreeMedia);
          });
      }, []);

      useEffect(()=>{
        AOS.init({
          easing:'ease-in-sine',
          duration: 1000,
          anchorPlacement: 'top-bottom',
          once: true,
        })
      },[])

    return (
        <div className='container pt-5' data-aos='fade-up'>
               <h1 className='section-header  text-center mb-5  py-4'>Videos & Media Coverage</h1>
               <div className='row text-center'>
                {medias.map(media=>(
                     <div key={media.id} className="col-md-6 col-sm-6 col-lg-4 mb-3">
                        <iframe
                        width={400}
                        height={315}
                        src={media.link}
                        allow="autoplay; encrypted-media"
                        allowFullScreen=""
                        />
                     </div>
                ))}
               </div>
               <div className='text-center'>
                    <Link to='/media' className='my-btn'>
                    See More
                    </Link>
                </div>
        </div>
    );
};

export default MediaCoverage;