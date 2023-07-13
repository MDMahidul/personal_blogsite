import React, { useEffect } from 'react';
import './Vision.css';
import AOS from 'aos';

const Vision = () => {

    useEffect(()=>{
        AOS.init({
            easing: 'ease-in-sine',
            duration: 1000,
            anchorPlacement: 'top-bottom',
            once: true,
        });
    },[])

    return (
        <div className='container py-4 mt-5' data-aos='fade-up'>
            <h1 className="section-header text-center py-4 mb-3 mt-3">Messages</h1>
            <p className='vision-des'>I am an open-minded and resourceful businessman driven by a strong vision for success. With dynamic leadership and excellent communication skills, I create harmonious working environments where every team member can thrive. Trustworthiness, honesty, and integrity are my guiding principles. I embrace challenges and take calculated risks, constantly pushing boundaries. Sports are my passion, and I believe in their power to unite and develop our society. I am dedicated to driving innovation, managing large-scale ventures, and fostering the growth of sports in Bangladesh.</p>
        </div>
    );
};

export default Vision;