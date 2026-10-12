import React from 'react'
import { FiGlobe, FiMapPin } from 'react-icons/fi';
import { Chip, Tag, glass } from './ui';

const domain = (href) => href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

const WorkItem = ({ job, logo, banner, bannerPosition = 'center' }) => {
    return (
        <article className={'flex h-full flex-col overflow-hidden ' + glass}>

            {/* Banner */}
            {banner && (
                <a href={job.companyLink} target='_blank' rel='noreferrer' className='block overflow-hidden'>
                    <img src={banner} alt={job.company} className='aspect-[2/1] w-full object-cover transition-transform duration-500 hover:scale-[1.02]' style={{ objectPosition: bannerPosition }} loading='lazy' />
                </a>
            )}

            {/* Company */}
            <header className='flex items-start gap-4 border-b border-white/10 px-5 py-5 md:px-6'>
                <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm'>
                    <img src={logo} alt='' className='h-full w-full object-contain' />
                </span>
                <div className='min-w-0'>
                    <h3 className='text-2xl font-semibold tracking-tight text-white'>{job.company}</h3>
                    <div className='mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-400'>
                        <a href={job.companyLink} target='_blank' rel='noreferrer' className='inline-flex items-center gap-1.5 transition-colors hover:text-white'>
                            <FiGlobe aria-hidden="true" /> {domain(job.companyLink)}
                        </a>
                        <span className='inline-flex items-center gap-1.5'><FiMapPin aria-hidden="true" /> {job.location}</span>
                    </div>
                </div>
            </header>

            {/* Roles */}
            <div className='divide-y divide-dashed divide-white/10 px-5 md:px-6'>
                {job.roles.map((role) => (
                    <div key={role.title} className='py-5'>
                        <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
                            <h4 className='flex items-center gap-2 text-lg font-semibold tracking-tight text-white'>
                                {role.title}
                                {role.end === 'Present' && <Tag>Current</Tag>}
                            </h4>
                            <span className='font-mono text-xs text-zinc-400'>{role.start} — {role.end}</span>
                        </div>
                        <ul className='mt-3 space-y-1.5 text-[15px] leading-relaxed text-zinc-300'>
                            {role.highlights.map((highlight) => (
                                <li key={highlight} className='relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-600'>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Stack */}
            <div className='mt-auto flex flex-wrap gap-2 border-t border-white/10 px-5 py-4 md:px-6'>
                {job.stack.map((tech) => <Chip key={tech}>{tech}</Chip>)}
            </div>
        </article>
    )
}

export default WorkItem
