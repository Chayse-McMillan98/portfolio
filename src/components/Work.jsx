import React from 'react';
import WorkItem from './WorkItem';
import Title from './Title';
import backgroundImg from '../assets/images/web/sawtooth.jpg';
import dakcsImg from '../assets/images/dakcs.png';
import io1440Img from '../assets/images/io1440.png';
import kiln from '../assets/images/kiln.jpg';
import dakcsBanner from '../assets/images/web/dakcs_Asset.jpg';
import { experience } from '../data/resume';

// Images keyed by experience id in src/data/resume.js.
// bannerPosition picks which part of the photo shows in the 2:1 banner crop.
const images = {
    '1440': { logo: io1440Img, banner: kiln, bannerPosition: 'center' },
    'dakcs': { logo: dakcsImg, banner: dakcsBanner, bannerPosition: 'center 58%' },
};

const roleCount = experience.reduce((total, job) => total + job.roles.length, 0);

const Work = () => {
    return (
        <div id='work' className='relative bg-white'>

            { /* Background Img */}
            <div className='absolute w-full h-full'>
                <img className='absolute w-full h-full object-cover' src={backgroundImg} alt="" aria-hidden="true" loading="lazy" />
                <div className='absolute w-full h-1/6 bg-gradient-to-b from-[#969696] to-transparent' style={{ top:0 }}></div>
                <div className='absolute w-full h-1/6 bg-gradient-to-t from-[#969696] to-transparent' style={{ bottom:0 }}></div>
            </div>

            { /* Section Title */}
            <Title
                index='01'
                eyebrow='Experience'
                text='Work'
                description='Building commerce platforms and integrations for major retail brands.'
                meta={`${experience.length} companies · ${roleCount} roles`}
                width='max-w-7xl 2xl:max-w-[min(90vw,110rem)]'
            />

            { /* Work Items */}
            <div className='relative mx-auto grid max-w-7xl gap-6 px-4 pb-20 md:px-8 md:pb-28 lg:grid-cols-2 2xl:max-w-[min(90vw,110rem)]'>
                {experience.map((job) => (
                    <WorkItem key={job.id} job={job} {...images[job.id]} />
                ))}
            </div>
        </div>
    )
}

export default Work
