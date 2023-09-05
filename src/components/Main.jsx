import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import backgroundImg from '../assets/images/unsplash2.jpg';
import '../assets/css/fonts.css';

const Main = () => {
  return (
    <div id='main'>
        {/*<img className='w-full h-screen object-cover' src={backgroundImg} alt="logo" />*/}

        <div className='relative w-full h-screen'>
          <img className='absolute w-full h-screen object-cover' src={backgroundImg} alt="logo" />
          <div className='absolute w-full h-1/4 bg-gradient-to-t from-white to-transparent' style={{bottom:0}}></div>
        </div>

        <div className='absolute md:top-20 top-10 z-[1]'>
          <h2 className='PermanentMarkerFont md:ml-60 ml-10 md:text-7xl text-6xl'>Chayse</h2>
          <h2 className='PermanentMarkerFont md:ml-80 ml-20 md:text-7xl text-5xl'>McMillan</h2>
          
          <TypeAnimation
              sequence={[
                'Software Engineer.',
                1000,
                'Tech Enthusiast.',
                1000,
                'Lead Engineer.',
                1000,
                'Solutions Architect.',
                1000,
                'Commerce Developer.',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ color: 'white', display: 'inline-block' }}
              repeat={Infinity}
              className='md:ml-80 ml-20 ReadyP2Font md:text-lg text-sm'
            />

        </div>
    </div>
  )
}

export default Main