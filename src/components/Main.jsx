import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import backgroundImg from '../assets/images/background.jpg';
import '../assets/css/fonts.css';

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src={backgroundImg} alt="logo" />
        <div className='absolute top-20 z-[1]'>
          <h2 className='PermanentMarkerFont md:ml-60 ml-10 md:text-7xl text-6xl'>Chayse</h2>
          <h2 className='PermanentMarkerFont md:ml-80 ml-20 md:text-7xl text-5xl'>McMillan</h2>
          
          <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Tech Enthusiast.',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Software Engineer.',
                1000,
                'eCommerce Developer.',
                1000,
                'Solutions Architect.',
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