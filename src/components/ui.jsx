import React from 'react'

// Shared building blocks for the card-based sections (Work, Projects, Resume, Contact).
// Cards are dark translucent glass so the photography behind each section shows through.

export const glass = 'rounded-2xl border border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/30 backdrop-blur-xl';

export const Eyebrow = ({ className = '', children }) => (
    <p className={'font-mono text-[11px] uppercase tracking-[0.18em] ' + className}>{children}</p>
);

export const Chip = ({ children }) => (
    <span className='inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-300'>{children}</span>
);

export const Tag = ({ tone = 'live', children }) => {
    const tones = {
        live: 'bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/20',
        plain: 'bg-white/10 text-zinc-400',
    };
    return <span className={'rounded-full px-2 py-px text-[11px] font-medium ' + tones[tone]}>{children}</span>;
};

export const Button = ({ variant = 'primary', className = '', children, ...props }) => {
    const variants = {
        primary: 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-sm',
        outline: 'border border-white/20 bg-white/5 text-white hover:bg-white/10',
        ink: 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-sm',
    };
    return (
        <a className={'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ' + variants[variant] + ' ' + className} {...props}>
            {children}
        </a>
    );
};

// Glass card with a browser-window style title bar.
export const WindowCard = ({ bar, className = '', children }) => (
    <div className={'overflow-hidden ' + glass + ' ' + className}>
        <div className='flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5'>
            <span className='flex shrink-0 gap-1.5' aria-hidden="true">
                <i className='h-2.5 w-2.5 rounded-full bg-white/20'></i>
                <i className='h-2.5 w-2.5 rounded-full bg-white/20'></i>
                <i className='h-2.5 w-2.5 rounded-full bg-white/20'></i>
            </span>
            {bar}
        </div>
        {children}
    </div>
);
