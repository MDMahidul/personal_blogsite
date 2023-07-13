import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home.jsx';
import PublicationPage from './components/PublicationPage/PublicationPage.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import MediaCoveragePage from './components/MediaCoveragePage/MediaCoveragePage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import 'aos/dist/aos.css';
import Error from './components/Error/Error.jsx';
import { Toaster } from 'react-hot-toast'
import BlogsPage from './components/BlogsPage/BlogsPage.jsx';
import BlogDetails from './components/BlogDetails/BlogDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error/>,
    loader:()=> fetch('/blogs.json'),
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <BlogsPage/>},
      { path: '/blogs/:id', element: <BlogDetails/>},
      { path: '/about', element: <AboutPage/> },
      { path: '/publication', element: <PublicationPage/> },
      { path: '/contact', element: <ContactPage/> },
      { path: '/media', element: <MediaCoveragePage/> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={router}></RouterProvider>
   <Toaster/>
  </>
)
