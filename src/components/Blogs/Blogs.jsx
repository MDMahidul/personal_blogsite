import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../App';
import AOS from 'aos';

const Blogs = () => {
  const blogs = useContext(BlogContext);

  const [fourBlogs, setBlogs] = useState([]);

  useEffect(() => {
    const firstFourBlogs = blogs.slice(0, 4);
    setBlogs(firstFourBlogs);
  }, [blogs]);

  useEffect(()=>{
    AOS.init({
      easing:'ease-in-sine',
      duration: 1000,
      anchorPlacement:'top-bottom',
      once:true
    })
  },[])

  return (
    <div className="container py-5 mt-5" data-aos='fade-up'>
      <h1 className="text-center py-4 mb-4 section-header">Blogs & Writings</h1>
      <div className="row">
        {fourBlogs.map((blog) => (
          <div key={blog.id} className="col-lg-6">
            <div className="card blog-card p-2 mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog.image} className="img-fluid" alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="card-title">
                      <p>
                        <b>Title: </b>
                        {blog.title}
                      </p>
                    </div>
                    <p className="card-text">
                      <b>Date:</b> {blog.p_date}
                    </p>
                    <Link to={`/blogs/${blog.id}`} className="my-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <Link to='/blogs' className='my-btn'>
          See More
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
