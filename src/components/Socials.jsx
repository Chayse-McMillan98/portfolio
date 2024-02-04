import React from 'react'
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import trailhead from '../assets/images/trailhead.svg';

const Socials = () => {

    //
    // Redirects
    //
    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/chayse-mcmillan", "_blank");
    };
    const openGithub = () => {
        window.open("https://github.com/Chayse-McMillan98", "_blank");
    };
    const openInstagram = () => {
        window.open("https://www.instagram.com/chayse_mcmillan", "_blank");
    };
    const openTrailhead = () => {
        window.open("https://trailblazer.me/id/ccmcmillan", "_blank");
    };

    return (
      <div id='socials'>
        <div className='flex'>
            <FaLinkedin size={60} style={{paddingRight: '20px', cursor: 'pointer', marginLeft: '15px'}} onClick={openLinkedIn}/>
            <FaGithub size={60} style={{paddingRight: '20px', cursor: 'pointer'}} onClick={openGithub}/>
            <FaInstagramSquare size={60} style={{paddingRight: '20px', cursor: 'pointer'}} onClick={openInstagram}/>
            <img src={trailhead} style={{height: '70px', objectFit: 'cover', marginTop: '-4px', marginLeft: '-15px', cursor: 'pointer'}} onClick={openTrailhead}/>
        </div>
      </div>
    )
}
  
export default Socials