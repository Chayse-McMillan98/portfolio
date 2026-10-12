import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import backgroundImg from '../assets/images/web/hero.jpg';
import meImg from '../assets/images/web/profile.jpg';
import '../assets/css/fonts.css';
import Socials from './Socials';

const Main = () => {
  return (
    <div id='main'>

        {/* Background Image */}
        <div className='relative w-full h-screen bg-zinc-950'>
          {/* On phones the photo starts lower so the name and typing text don't cover the subject's head */}
          <img className='absolute left-0 w-full object-cover top-[14vh] h-[86vh] object-[16%_center] md:top-0 md:h-screen md:object-center' src={backgroundImg} alt="" aria-hidden="true"/>
          <div className='absolute inset-x-0 top-[14vh] h-24 bg-gradient-to-b from-zinc-950 to-transparent md:hidden'></div>
          {/* Darkens the top-left corner so the white name and icons stay readable */}
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.6),transparent_55%)]'></div>
          <div className='absolute w-full h-1/4 bg-gradient-to-t from-[#969696] to-transparent' style={{bottom:0}}></div>
        </div>

        <div className='absolute md:top-20 top-10 z-[1]'>
          <div className='flex'>

            {/* Rounded Profile Picture -- Desktop */}
            <div className='md:block hidden' style={{paddingLeft: '20px'}}>
              <img style={{borderRadius: '200px', height: '200px', width: '200px', objectFit: 'cover', minWidth:'200px'}} src={meImg} alt='Chayse McMillan'/>
            </div>

            {/* Rounded Profile Picture -- Mobile */}
            <div className='md:hidden block' style={{paddingLeft: '10px'}}>
              <img style={{borderRadius: '100px', height: '100px', width: '100px', objectFit: 'cover', minWidth:'100px'}} src={meImg} alt='Chayse McMillan'/>
            </div>

            {/* Name -- Animated */}
            <div>
              <h2 className='PermanentMarkerFont md:ml-5 ml-3 md:text-7xl text-6xl text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]'>Chayse</h2>
              <h2 className='PermanentMarkerFont md:ml-10 md:text-7xl text-5xl text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]'>McMillan</h2>
              {/* key forces a remount on change: TypeAnimation ignores prop updates after mounting */}
              <TypeAnimation
                  key='hero-type-white'
                  sequence={[
                    'Principal Engineer.',
                    1000,
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
                  style={{ display: 'inline-block', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
                  repeat={Infinity}
                  className='md:ml-6 -ml-16 ReadyP2Font md:text-lg text-sm text-white transform-gpu'
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