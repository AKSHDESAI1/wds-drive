import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";
import video from "../Assets/FINAL.mp4";

const About = () => {
  return (
    <div className="video-container" id="about">
      <video src={video} autoPlay loop muted />

      <div className="about-section-container" >
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">FILEPORT</h1>
          <p className="primary-text">
            FILEPORT is a secure platform to upload and organise your documents
            in a well-arranged manner.
          </p>
          <p className="primary-text">
            One of the main feature of this web-application is that you can
            download and share your files with the help of our whatsapp  bot
            service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
