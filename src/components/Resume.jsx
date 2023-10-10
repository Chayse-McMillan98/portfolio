import React from 'react'
import Title from './Title';
import { AiOutlineDownload } from 'react-icons/ai';
import backgroundImg from '../assets/images/sawtooth_3.jpg';
import resume from '../assets/files/resume.pdf';
import resume_1 from '../assets/images/resume_1.jpg';
import resume_2 from '../assets/images/resume_2.jpg';

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
            <div className='flex flex-nowrap justify-center'>
                <div>
                    <div className='relative md:px-14 px-8 md:pb-14 pb-8'>
                        <img className='object-contain rounded-2xl' src={resume_1} alt="logo"/>
                    </div>
                    <div className='relative md:px-14 px-8 md:pb-8 pb-4'>
                        <img className='object-contain rounded-2xl' src={resume_2} alt="logo"/>
                    </div>

                    <div className='relative md:pb-8 pb-4'>
                        { /* Large Device Button*/ }
                        <div className='md:block hidden'>
                            <div className='justify-center flex'>
                                <a href={resume} rel="noreferrer" className='bg-black text-white mt-4 w-1/2 p-4 rounded-lg' download="Chayse_McMillan_Resume.pdf" target='_blank'>
                                    <div className='justify-center flex'>
                                        <div className='pr-2 MontserratBoldFont'>Download</div>
                                        <AiOutlineDownload className='text-white mt-1' size={20}/>
                                    </div>
                                </a>
                            </div>
                        </div>

                        { /* Small Device Button*/ }
                        <div className='md:hidden block'>
                            <div className='justify-center flex'>
                                <a href={resume} rel="noreferrer" className='bg-black text-white mt-4 w-1/2 p-4 rounded-lg' download="Chayse_McMillan_Resume.pdf" target='_blank'>
                                    <div className='justify-center flex'>
                                        <div className='pr-2 MontserratBoldFont'>Download</div>
                                        <AiOutlineDownload className='text-white mt-1' size={20}/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>



                </div>


            </div>   

        </div>
    )
}

export default Resume