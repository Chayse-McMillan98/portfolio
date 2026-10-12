import React from 'react';
import Title from './Title';
import ContactForm from './ContactForm';
import { FiMail, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { glass, Eyebrow } from './ui';
import { profile } from '../data/resume';
import backgroundImg from '../assets/images/web/sawtooth_2.jpg';

const channels = [
    { icon: FiMail, label: 'Email', value: profile.email, href: 'mailto:' + profile.email },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'in/chayse-mcmillan', href: profile.links.find((link) => link.name === 'LinkedIn').href },
    { icon: FaGithub, label: 'GitHub', value: 'Chayse-McMillan98', href: profile.links.find((link) => link.name === 'GitHub').href },
    { icon: FiMapPin, label: 'Location', value: profile.location },
];

const Contact = () => {
    return (
        <div id='contact' className='relative bg-white'>

            { /* Background Img */}
            <div className='absolute w-full h-full'>
                <img className='absolute w-full h-full object-cover' src={backgroundImg} alt="" aria-hidden="true" loading="lazy" />
                <div className='absolute w-full h-1/6 bg-gradient-to-b from-[#9F9F9F] to-transparent' style={{ top:0 }}></div>
            </div>

            { /* Section Title */}
            <Title
                index='04'
                eyebrow='Get in touch'
                text='Contact'
                description="Have a role or project in mind? I'd like to hear about it."
                meta={<a href={'mailto:' + profile.email} className='normal-case transition-colors hover:text-white'>{profile.email}</a>}
                width='max-w-7xl 2xl:max-w-[min(90vw,110rem)]'
            />

            <div className='relative mx-auto grid max-w-7xl gap-6 px-4 pb-20 md:px-8 md:pb-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] 2xl:max-w-[min(90vw,110rem)]'>

                { /* Contact Details */}
                <div className={glass + ' h-fit p-5 md:p-6'}>
                    <Eyebrow className='text-zinc-500'>Reach me directly</Eyebrow>
                    <ul className='mt-4 divide-y divide-white/10'>
                        {channels.map(({ icon: Icon, label, value, href }) => {
                            const content = (
                                <>
                                    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200'><Icon aria-hidden="true" /></span>
                                    <span className='min-w-0'>
                                        <span className='block font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500'>{label}</span>
                                        <span className='block truncate text-[15px] text-white'>{value}</span>
                                    </span>
                                    {href && <FiArrowUpRight className='ml-auto shrink-0 text-zinc-500 transition-colors group-hover:text-white' aria-hidden="true" />}
                                </>
                            );
                            return (
                                <li key={label}>
                                    {href
                                        ? <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel='noreferrer' className='group flex items-center gap-4 py-3.5'>{content}</a>
                                        : <div className='flex items-center gap-4 py-3.5'>{content}</div>}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                { /* Contact Form */}
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact