import React, { useContext } from 'react';
import { BlogContext } from '../../App';
import './BlogDetails.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const BlogDetails = () => {
  const blogs = useContext(BlogContext || []);
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert the id parameter from string to the appropriate data type (e.g., number)
/*   const blogId = parseInt(id); */

  const blog = blogs.find((blog) => blog.id === id);

  return (
    <div className='container py-5'>
        <h1 className='text-center py-4 section-header'>Details</h1>
      {blog ? (
        <div className='row py-2'>
            <div className="col-lg-6 text-center mb-5">
                <img className='img-fluid w-75' src={blog.image} alt="" />
            </div>
            <div className="col-lg-6">
                <h6><b>Title: </b>{blog.title}</h6><br></br>
                <p className='blog-text'>{blog.content}</p><br></br>
                <div className='d-flex justify-content-between'>
                  <small className='text-body-tertiary'><FontAwesomeIcon icon={faCalendarDays} /> {blog.p_date}</small>
                  <small className='text-body-tertiary'>Category: {blog.category}</small>
                </div>
            </div>
        </div>
      ) : (
        <div>Blog not found</div>
      )}

      <div className="text-center">
        <Link className='my-btn' onClick={() => navigate(-1)}>
            Go Back
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
