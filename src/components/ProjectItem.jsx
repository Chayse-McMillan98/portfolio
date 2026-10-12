import React, { useState } from 'react'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { Chip, Tag, Button, Eyebrow, glass } from './ui';

// Project showcase: a clickable screenshot gallery beside the project details.
const ProjectItem = ({ project }) => {
    const [active, setActive] = useState(0);
    const count = project.gallery.length;
    const shot = project.gallery[active];
    const go = (step) => setActive((active + step + count) % count);

    return (
        <article className={'overflow-hidden ' + glass}>
            <div className='grid lg:grid-cols-[minmax(0,1fr)_22rem] xl:grid-cols-[minmax(0,1fr)_26rem]'>

                {/* Gallery */}
                <div className='border-b border-white/10 lg:border-b-0 lg:border-r'>
                    <div className='group relative bg-black/40'>
                        <img src={shot.src} alt={project.name + ' — ' + shot.label} className='aspect-[2.09/1] w-full object-cover object-top' />
                        <button onClick={() => go(-1)} aria-label='Previous screenshot' className='absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-zinc-950/70 text-white opacity-0 backdrop-blur transition-opacity hover:bg-zinc-900 focus:opacity-100 group-hover:opacity-100'>
                            <FiChevronLeft aria-hidden="true" />
                        </button>
                        <button onClick={() => go(1)} aria-label='Next screenshot' className='absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-zinc-950/70 text-white opacity-0 backdrop-blur transition-opacity hover:bg-zinc-900 focus:opacity-100 group-hover:opacity-100'>
                            <FiChevronRight aria-hidden="true" />
                        </button>
                    </div>
                    <div className='flex items-start justify-between gap-4 px-5 py-3 md:px-6'>
                        <p className='text-sm text-zinc-300'><span className='font-semibold text-white'>{shot.label}</span> — {shot.caption}</p>
                        <span className='shrink-0 font-mono text-xs text-zinc-500'>{String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
                    </div>

                    {/* Thumbnails */}
                    <div className='flex gap-2 overflow-x-auto px-5 pb-5 md:px-6'>
                        {project.gallery.map((item, idx) => (
                            <button
                                key={item.label}
                                onClick={() => setActive(idx)}
                                aria-label={'Show ' + item.label}
                                aria-current={idx === active}
                                className={'shrink-0 overflow-hidden rounded-lg border transition ' + (idx === active ? 'border-white ring-2 ring-white/30' : 'border-white/10 opacity-60 hover:opacity-100')}
                            >
                                <img src={item.src} alt='' className='h-14 w-28 object-cover object-top' loading='lazy' />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className='flex flex-col p-5 md:p-6'>
                    <Eyebrow className='text-zinc-500'>Salesforce AppExchange · {project.publisher}</Eyebrow>
                    <div className='mt-2 flex items-center gap-2'>
                        <h3 className='text-3xl font-semibold tracking-tight text-white'>{project.name}</h3>
                        {project.status && <Tag>{project.status}</Tag>}
                    </div>
                    <p className='mt-2 text-base text-zinc-200'>{project.tagline}</p>

                    {project.soleDeveloper && (
                        <div className='mt-5 flex gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4'>
                            <AiOutlineUser className='mt-0.5 shrink-0 text-emerald-300' size={18} aria-hidden="true" />
                            <div>
                                <p className='font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-300'>Sole developer</p>
                                <p className='mt-1 text-sm leading-relaxed text-zinc-100'>{project.soleDeveloper}</p>
                            </div>
                        </div>
                    )}

                    <p className='mt-5 text-[15px] leading-relaxed text-zinc-300'>{project.description}</p>

                    <div className='mt-5 flex flex-wrap gap-2'>
                        {project.stack.map((tech) => <Chip key={tech}>{tech}</Chip>)}
                    </div>

                    <div className='mt-auto pt-6'>
                        <Button href={project.projectLink} target='_blank' rel='noreferrer' className='w-full'>
                            {project.linkLabel} <FiArrowUpRight aria-hidden="true" />
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectItem
