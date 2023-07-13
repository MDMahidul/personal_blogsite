import React,{useState, createContext} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet,useLoaderData } from 'react-router-dom';

export const BlogContext = createContext([]);

function App() {
  const blogs = useLoaderData();
  return (
    <BlogContext.Provider value={blogs}>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </BlogContext.Provider>
  )
}

export default App
