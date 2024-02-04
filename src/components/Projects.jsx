import React from 'react';
import Title from './Title';
import backgroundImg from '../assets/images/little_dell.jpg';
import ProjectItem from './ProjectItem';


// Project Images (1900 x 1100)
import portfolioImg from '../assets/images/portfolio.png';

// Language Refs
import { SiVite, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

const data = [
  {
    name: 'Portfolio Website',
    projectLink: 'https://github.com/Chayse-McMillan98/portfolio',
    bannerImg: portfolioImg,
    languages: [
      {
        language: 'React',
        icon: FaReact
      },
      {
        language: 'Tailwind',
        icon: SiTailwindcss
      },
      {
        language: 'Vite',
        icon: SiVite
      }
    ]
  }
];

const Projects = () => {
  return (
    <div id='projects' className='bg-white relative'>

        { /* Background Img */}
        <div className='absolute w-full h-full'>
            <img className='absolute w-full h-full object-cover' src={backgroundImg} alt="logo" />
            <div className='absolute w-full h-1/6 bg-gradient-to-b from-[#969696] to-transparent' style={{ top:0 }}></div>
            <div className='absolute w-full h-1/6 bg-gradient-to-t from-[#5C5C5C] to-transparent' style={{ bottom:0 }}></div>
        </div>

        { /* Section Title */}
        <Title
            text='Projects'
            largeDeviceUnderline='240px'
            smallDeviceUnderline='140px'
        ></Title>

        { /* Project Items */}
        {data.map((item, idx)=> (
            <ProjectItem
                key={idx}
                name={item.name}
                projectLink={item.projectLink}
                bannerImg={item.bannerImg}
                languages={item.languages} 
            />
        ))}

        { /* Project Items https://www.youtube.com/watch?v=22CxRxryQFE
        <div className='h-screen'>
        </div>
         */}  
    </div>
  )
}

export default Projects