import React from 'react'

// Section header, left-aligned to the section's content width.
// `width` should match the max-width classes of the content below it.
const Title = ({ index, eyebrow, text, description, meta, width = 'max-w-7xl' }) => {
  return (
    <div className='relative'>
        {/* Soft dark band so white text stays crisp over light parts of the photo */}
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent' aria-hidden="true"></div>

        <div className={'relative mx-auto px-4 pt-24 pb-8 md:px-8 md:pt-32 md:pb-10 ' + width}>
            <div className='flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-white/20 pb-6'>
                <div>
                    {eyebrow && (
                        <p className='font-mono text-xs uppercase tracking-[0.2em] text-white/70'>
                            {index && <span className='text-white'>{index}</span>}{index && ' / '}{eyebrow}
                        </p>
                    )}
                    <h2 className='mt-3 text-5xl font-semibold tracking-[-0.03em] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] md:text-7xl'>{text}</h2>
                    {description && <p className='mt-3 max-w-xl text-base text-white/90 md:text-lg'>{description}</p>}
                </div>
                {meta && <div className='font-mono text-xs uppercase tracking-[0.14em] text-white/75'>{meta}</div>}
            </div>
        </div>
    </div>
  )
}

export default Title
