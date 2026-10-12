import React from 'react'
import Title from './Title';
import { AiOutlineDownload } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import backgroundImg from '../assets/images/web/sawtooth_3.jpg';
import resume from '../assets/files/Resume.pdf';
import { profile, skills, education, certifications, awards } from '../data/resume';
import { WindowCard, Eyebrow, Button, Tag, glass } from './ui';

const Card = ({ label, children }) => (
    <div className={glass + ' p-5'}>
        <Eyebrow className='text-zinc-500'>{label}</Eyebrow>
        <div className='mt-3'>{children}</div>
    </div>
);

const Resume = () => {
    return (
        <div id='resume' className='relative bg-white'>

            { /* Background Img */}
            <div className='absolute w-full h-full'>
                <img className='absolute w-full h-full object-cover' src={backgroundImg} alt="" aria-hidden="true" loading="lazy" />
                <div className='absolute w-full h-1/6 bg-gradient-to-b from-[#5C5C5C] to-transparent' style={{ top:0 }}></div>
                <div className='absolute w-full h-1/6 bg-gradient-to-t from-[#9F9F9F] to-transparent' style={{ bottom:0 }}></div>
            </div>

            { /* Section Title */}
            <Title
                index='03'
                eyebrow='Skills & credentials'
                text='Resume'
                description='Skills, credentials, and a one-page PDF to take with you.'
                meta={<a href={resume} download="Chayse_McMillan_Resume.pdf" className='transition-colors hover:text-white'>PDF · 1 page ↓</a>}
                width='max-w-7xl 2xl:max-w-[min(90vw,110rem)]'
            />

            <div className='relative mx-auto grid max-w-7xl gap-6 px-4 pb-20 md:px-8 md:pb-28 lg:grid-cols-3 2xl:max-w-[min(90vw,110rem)]'>

                { /* Skills — dark grid panel */}
                <div
                    className={'relative overflow-hidden p-5 md:p-6 lg:col-span-2 ' + glass}
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                >
                    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent,rgba(9,9,11,0.6)_75%)]' aria-hidden="true"></div>
                    <div className='relative'>
                        <div className='flex items-center gap-3'>
                            <span className='flex gap-1.5' aria-hidden="true">
                                <i className='h-2.5 w-2.5 rounded-full bg-zinc-700'></i>
                                <i className='h-2.5 w-2.5 rounded-full bg-zinc-700'></i>
                                <i className='h-2.5 w-2.5 rounded-full bg-zinc-700'></i>
                            </span>
                            <Eyebrow className='text-zinc-400'>Skills &amp; stack</Eyebrow>
                        </div>
                        <dl className='mt-4 divide-y divide-white/10'>
                            {skills.map((group) => (
                                <div key={group.group} className='grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4'>
                                    <dt className='font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400 sm:pt-0.5'>{group.group}</dt>
                                    <dd className='flex flex-wrap gap-y-1 text-sm text-zinc-200'>
                                        {group.items.map((item) => (
                                            <span key={item} className="after:mx-2.5 after:text-zinc-600 after:content-['·'] last:after:content-none">{item}</span>
                                        ))}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                { /* Download */}
                <WindowCard bar={<span className='font-mono text-xs text-zinc-400'>resume.pdf</span>} className='flex flex-col'>
                    <div className='flex flex-1 flex-col p-5'>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-lg font-semibold tracking-tight text-white'>{profile.name}</h3>
                        </div>
                        <p className='text-sm text-zinc-400'>{profile.title}</p>
                        <p className='mt-3 text-sm leading-relaxed text-zinc-300'>{profile.summary}</p>
                        <p className='mt-3 font-mono text-xs text-zinc-500'>One-page PDF · experience, skills, credentials</p>
                        <div className='mt-auto flex flex-col gap-2 pt-5'>
                            <Button href={resume} download="Chayse_McMillan_Resume.pdf">
                                Download PDF <AiOutlineDownload aria-hidden="true" />
                            </Button>
                            <Button variant='outline' href={resume} target='_blank' rel='noreferrer'>
                                View in browser <FiArrowUpRight aria-hidden="true" />
                            </Button>
                        </div>
                    </div>
                </WindowCard>

                { /* Credentials */}
                <Card label='Education'>
                    {education.map((edu) => (
                        <div key={edu.school}>
                            <h3 className='font-semibold text-white'>{edu.school}</h3>
                            <p className='text-sm text-zinc-300'>{edu.degree}</p>
                            <p className='mt-1 font-mono text-xs text-zinc-400'>{edu.start} — {edu.end} · {edu.location}</p>
                            <p className='mt-2 text-sm leading-relaxed text-zinc-400'>{edu.detail}</p>
                        </div>
                    ))}
                </Card>
                <Card label='Certifications'>
                    {certifications.map((cert) => (
                        <div key={cert.name}>
                            <h3 className='font-semibold text-white'>{cert.name}</h3>
                            <p className='mt-1 flex items-center gap-2 font-mono text-xs text-zinc-400'>Issued {cert.year} <Tag>Certified</Tag></p>
                        </div>
                    ))}
                </Card>
                <Card label='Awards'>
                    {awards.map((award) => (
                        <div key={award.name}>
                            <h3 className='font-semibold text-white'>{award.name}</h3>
                            <p className='mt-1 font-mono text-xs text-zinc-400'>{award.year}</p>
                        </div>
                    ))}
                </Card>
            </div>
        </div>
    )
}

export default Resume
