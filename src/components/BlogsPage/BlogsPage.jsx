import React, { useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../App';
import AOS from 'aos';
import GoToPageTop from '../GoToPageTop/GoToPageTop';

const BlogsPage = () => {
  const blogs = useContext(BlogContext);

  useEffect(() => {
    AOS.init({
         easing: 'ease-in-sine',
        duration: 1000,
        anchorPlacement: 'top-bottom' ,
        once: true,
    });
}, []);

  return (
    <div className="container py-5">
      <h1 className="text-center py-4 mb-4 section-header">Blogs</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-lg-6" data-aos="fade-up">
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
      <GoToPageTop/>
    </div>
  );
};

export default BlogsPage;
