import React,{useState,useEffect} from 'react';
import './PublicationPage.css'
import AOS from 'aos';
import GoToPageTop from '../GoToPageTop/GoToPageTop';

const PublicationPage = () => {
    const [publications,setPublications] = useState([]);
     
    useEffect(() => {
        fetch('/publications.json')
          .then((res) => res.json())
          .then(data => setPublications(data));
      }, []);

      useEffect(()=>{
        AOS.init({
            easing:'ease-in-sine',
            duration: 1000,
            anchorPlacement:'top-bottom',
            once:true,
        });
      },[])

    return (
        <div className='container py-5 mb-4'>
            <h1 className='section-header  text-center  py-4'>Publications</h1>
            <div className="row">
                {publications.map(publication =>(
                <div key={publication.id} className="col-lg-6 col-12" data-aos="fade-up">
                    <div className="card p-3 m-2 mb-4 book-card">
                        <div className="row">
                            <div className="col-md-5">
                               <p className='border-bottom pb-2'><b>Title: </b>{publication.name}</p>
                               <p className='border-bottom pb-2'><b>Author: </b>{publication.author}</p>
                               <p className='border-bottom pb-2'><b>Category: </b>{publication.type}</p>
                               <p className='border-bottom pb-2'><b>Edition: </b>{publication.date}</p>
                               <p className='border-bottom pb-2'><b>Publisher: </b>{publication.publisher}</p>
                               <p><b>Language: </b>{publication.language}</p>
                            </div>
                            <div className="col-md-7">
                                <img className='publicationPage-img' src={publication.image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <GoToPageTop/>
        </div>
    );
};

export default PublicationPage;