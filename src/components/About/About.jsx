import React,{useEffect} from 'react';
import './About.css';
import about from '/about.webp'
import AOS from 'aos';
import Vision from '../Vision/Vision';

const About = () => {
    useEffect(() => {
        AOS.init({
             easing: 'ease-in-sine',
            duration: 1000,
            anchorPlacement: 'top-bottom' ,
            once: true,
        });
    }, []);
    return (
        <div className='container about-container'>
            <h1 className='text-center mb-4 section-header' data-aos='fade-up'>About</h1>
            <div className="card about-card " data-aos='fade-up'>
                <div className="row" >
                    <div className="col-lg-6 order-lg-1 order-md-2  text-part" >
                        <div>
                            <h3>Mushfiqur Rahman Mohan</h3>
                            <small className='text-secondary'>-Distinguished social worker, politician, sports enthusiast, and successful businessman</small>
                            <br />
                            <br />
                        </div>
                        <div>
                        Mushfiqur Rahman Mohan was born into a middle-class Muslim family on September 11, 1965, in Belkuchi Thana, Sirajganj Zilla, Bangladesh.
                        </div><br></br>
                        <div>
                        From his youth, Mr. Mohan immersed himself in the political consciousness inspired by Bangabandhu Sheikh Mujibur Rahman. He dedicated and established himself in Awami politics at a young age. This ideology took root in his mind and emotions, leading him to actively engage in Awami politics. He worked for the Awami Youth League and held leadership positions. Thus, Mr. Mohan paved his political path and became known as an administrator, leader, and social worker.
                        </div><br></br>
                        <div>
                        He has an impressive track record as a former sports secretary of Bangladesh Awami Jubo League, former President of Bangladesh Bridge Federation, former President of Bangladesh Squash Rackets Federation (BSRF), and one of the founding members of the Bangladesh Premier League.
                        </div><br></br>
                        <div>
                        He is the of Chairman of Mohan Group, Overseas Study Counseling Ltd - OSCL, Duronto Fisheries, and Tech World BD.
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 text-center image-part">
                        <img className='rounded' src={about} alt="" />
                    </div>
                </div>
            </div>
            <Vision></Vision>
        </div>
    );
};

export default About;