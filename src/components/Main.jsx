import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import backgroundImg from '../assets/images/dock.jpg';
import meImg from '../assets/images/me.jpg';
import '../assets/css/fonts.css';
import Socials from './Socials';

const Main = () => {
  return (
    <div id='main'>

        {/* Background Image */}
        <div className='relative w-full h-screen'>
          <img className='absolute w-full h-screen object-cover' src={backgroundImg} alt="logo"/>
          <div className='absolute w-full h-1/4 bg-gradient-to-t from-[#969696] to-transparent' style={{bottom:0}}></div>
        </div>

        <div className='absolute md:top-20 top-10 z-[1]'>
          <div className='flex'>

            {/* Rounded Profile Picture -- Desktop */}
            <div className='md:block hidden' style={{paddingLeft: '20px'}}>
              <img style={{borderRadius: '200px', height: '200px', width: '200px', objectFit: 'cover', minWidth:'200px'}} src={meImg}/>
            </div>

            {/* Rounded Profile Picture -- Mobile */}
            <div className='md:hidden block' style={{paddingLeft: '10px'}}>
              <img style={{borderRadius: '100px', height: '100px', width: '100px', objectFit: 'cover', minWidth:'100px'}} src={meImg}/>
            </div>

            {/* Name -- Animated */}
            <div>
              <h2 className='PermanentMarkerFont md:ml-5 ml-3 md:text-7xl text-6xl text-black'>Chayse</h2>
              <h2 className='PermanentMarkerFont md:ml-10 md:text-7xl text-5xl text-black'>McMillan</h2>
              <TypeAnimation
                  sequence={[
                    'Software Engineer.',
                    1000,
                    'Tech Enthusiast.',
                    1000,
                    'Lead Engineer.',
                    1000,
                    'Solution Architect.',
                    1000,
                    'Commerce Developer.',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ color: 'black', display: 'inline-block' }}
                  repeat={Infinity}
                  className='md:ml-6 -ml-16 ReadyP2Font md:text-lg text-sm'
                />

            </div>
          </div>

          {/* SOCIALS */}
          <div className='flex md:mt-[20px] mt-[90px]' style={{alignItems: 'center', justifyContent: 'center', paddingTop:'5px'}}>
                <Socials/>
          </div>
        </div>
    </div>
  )
}

export default Main