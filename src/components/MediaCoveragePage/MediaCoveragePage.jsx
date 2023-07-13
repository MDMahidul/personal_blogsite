import React,{useState,useEffect} from 'react';
import GoToPageTop from '../GoToPageTop/GoToPageTop';
import './MediaCoveragePage.css'
import AOS from 'aos';

const MediaCoveragePage = () => {

    const [medias,setMedia] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const displayVideos = showAll ? medias : medias.slice(0,9);
    
    useEffect(() => {
        fetch('/media.json')
          .then((res) => res.json())
          .then(data => setMedia(data));
      }, []);

      const handleShowAll = () =>{
        setShowAll(true);
      }

      useEffect(()=>{
        AOS.init({
            easing:'ease-in-sine',
            duration:1000,
            anchorPlacement:'top-bottom',
            once:true,
        })
      },[])

    return (
        <div className='container py-5 mb-4 text-center' >
            <h1 className='text-center py-4 mb-4 section-header'>Media Coverage</h1>
            <div className="row" >
            {displayVideos.map(media=>(
                     <div key={media.id} className="col-md-6 col-lg-4 mb-3" data-aos="slide-up">
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
           {!showAll && (
            <div className='text-center'>
                <button className='my-btn' onClick={()=> handleShowAll()}>Show All</button>
            </div>
           )}
            <GoToPageTop/>
        </div>
    );
};

export default MediaCoveragePage;