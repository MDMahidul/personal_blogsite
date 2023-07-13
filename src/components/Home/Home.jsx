import React,{useEffect} from 'react';
import Carousel from '../BannerCarousel/BannerCarousel2';
import About from '../About/About';
import Events from '../Events/Events';
import Publications from '../Publications/Publications';
import MediaCoverage from '../MediaCoverage/MediaCoverage';
import GoToPageTop from '../GoToPageTop/GoToPageTop';
import Blogs from '../Blogs/Blogs';
import { useLocation } from 'react-router-dom';


const Home = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location.pathname]);

    return (
        <div className='container py-5'>
            <Carousel/>
            <About></About>
            <Events/>
            <MediaCoverage></MediaCoverage>
            <Blogs/>
            <Publications></Publications>
            <GoToPageTop/>
        </div>
    );
};

export default Home;