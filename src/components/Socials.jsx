import React from 'react'
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import trailhead from '../assets/images/trailhead.svg';

const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chayse-mcmillan', icon: FaLinkedin },
    { label: 'GitHub', href: 'https://github.com/Chayse-McMillan98', icon: FaGithub },
    { label: 'Instagram', href: 'https://www.instagram.com/chayse_mcmillan', icon: FaInstagramSquare },
];

const Socials = () => {
    return (
      <div id='socials'>
        <div className='flex items-center text-white drop-shadow-lg' style={{marginLeft: '25px'}}>
            {links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target='_blank' rel='noreferrer' aria-label={label} style={{paddingRight: '20px'}}>
                    <Icon size={40}/>
                </a>
            ))}
            <a href='https://trailblazer.me/id/ccmcmillan' target='_blank' rel='noreferrer' aria-label='Salesforce Trailhead'>
                <img src={trailhead} alt='' style={{height: '70px', objectFit: 'cover', marginTop: '-4px', marginLeft: '-15px', filter: 'invert(1)'}}/>
            </a>
        </div>
      </div>
    )
}

export default Socials
