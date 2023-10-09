import React from 'react'
import Title from './Title';
import backgroundImg from '../assets/images/sawtooth_3.jpg';

const Resume = () => {
    return (
        <div id='resume' className='relative bg-white'>

            { /* Background Img */}
            <div className='absolute w-full h-full'>
                <img className='absolute w-full h-full object-cover' src={backgroundImg} alt="logo" />
                <div className='absolute w-full h-1/6 bg-gradient-to-b from-[#5C5C5C] to-transparent' style={{ top:0 }}></div>
                <div className='absolute w-full h-1/6 bg-gradient-to-t from-[#9F9F9F] to-transparent' style={{ bottom:0 }}></div>
            </div>

            { /* Section Title */}
            <Title
                text='Resume'
                largeDeviceUnderline='240px'
                smallDeviceUnderline='140px'
            ></Title>

            { /* Project Items */}
            <div className='h-screen'>
            </div>   

        </div>
    )
}

export default Resume