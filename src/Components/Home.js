import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/books1.png";
import video from "../Assets/FINAL.mp4";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

import About from "./About";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";


import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
   <div className='video-container'>
      <video src={video} autoPlay loop muted /> 

    <div className="home-container">
      <Navbar />
      {/* </div> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">   
            <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
             Give it to Me <br/>
             Ill be take care of your files
             {/* Your Favourite Food Delivered Hot & Fresh */}
          </h1>
          <p className="primary-text">
          A fileport is a digital port that allows users to upload, store, and manage documents and other types of files. 
          </p>
          {/* <button className="secondary-button"> */}
          <Link to="/login" className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </Link>
            {/* <Navigate to='/login' /> */}
          {/* </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />

        </div>
      </div>
    </div>

   
    </div>

    <About />
    <Work />
    <Testimonial />
    <Contact />
    <Footer />
      
    </>

  );
};

export default Home;
