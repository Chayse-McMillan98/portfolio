import React from 'react';
import Title from './Title';
import ContactForm from './ContactForm';
import backgroundImg from '../assets/images/sawtooth_2.jpg';

const Contact = () => {
    return (
        <div id='contact' className='relative bg-white'>

            { /* Background Img */}
            <div className='absolute w-full h-full'>
                <img className='absolute w-full h-full object-cover' src={backgroundImg} alt="logo" />
                <div className='absolute w-full h-1/6 bg-gradient-to-b from-[#9F9F9F] to-transparent' style={{ top:0 }}></div>
                { /* <div className='absolute w-full h-1/6 bg-gradient-to-t from-[#969696] to-transparent' style={{ bottom:0 }}></div> */}
            </div>

            { /* Section Title */}
            <Title
                text='Contact'
                largeDeviceUnderline='240px'
                smallDeviceUnderline='140px'
            ></Title>

            { /* Contact Form */}
            <ContactForm/>
        </div>
    )
}

export default Contact