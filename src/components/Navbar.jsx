import React, { useState, useEffect } from 'react'
import { AiOutlineDownload } from 'react-icons/ai';
import '../assets/css/fonts.css';
import resume from '../assets/files/Resume.pdf';
import { Button } from './ui';

const links = [
    { href: '#work', label: 'Work' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock page scroll while the mobile menu is open
    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', open);
    }, [open]);

    const close = () => setOpen(false);

    return (
        <div>
            {/* Navbar (Large Screen) */}
            <nav className={'fixed inset-x-0 top-0 z-[99] hidden border-b transition-all duration-500 md:block ' + (scrolled ? 'border-white/10 bg-zinc-950/70 backdrop-blur-xl' : 'border-transparent bg-transparent')}>
                <div className='mx-auto flex h-14 max-w-7xl items-center gap-8 px-8 2xl:max-w-[min(90vw,110rem)]'>
                    <a href='#main' className={'PermanentMarkerFont !text-xl !text-white transition-opacity duration-500 ' + (scrolled ? 'opacity-100' : 'pointer-events-none opacity-0')}>
                        Chayse McMillan
                    </a>
                    <div className='flex items-center gap-7'>
                        {links.map((link) => (
                            <a key={link.href} href={link.href} className={'text-[15px] font-semibold transition-colors ' + 'text-zinc-100 hover:text-white'}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className='fixed right-4 top-4 z-[100] md:hidden'>
                <button
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    className={'flex h-12 w-12 items-center justify-center rounded-full border shadow-md transition-colors ' + (open ? 'border-white/10 bg-zinc-900' : 'border-white/10 bg-zinc-950/70 backdrop-blur-xl')}
                >
                    <span className='relative block h-3.5 w-5'>
                        <span className={'absolute left-0 h-[2px] w-5 bg-white transition-all duration-300 ' + (open ? 'top-1.5 rotate-45' : 'top-0')}></span>
                        <span className={'absolute left-0 top-1.5 h-[2px] w-5 bg-white transition-opacity duration-300 ' + (open ? 'opacity-0' : 'opacity-100')}></span>
                        <span className={'absolute left-0 h-[2px] w-5 bg-white transition-all duration-300 ' + (open ? 'top-1.5 -rotate-45' : 'top-3')}></span>
                    </span>
                </button>
            </div>

            {/* Mobile Menu Sheet */}
            <div className={'fixed inset-0 z-[99] flex flex-col bg-zinc-950 px-6 pb-8 pt-6 transition-all duration-300 md:hidden ' + (open ? 'opacity-100' : 'pointer-events-none -translate-y-2 opacity-0')}>
                <a href='#main' onClick={close} className='PermanentMarkerFont !text-3xl !text-white'>Chayse McMillan</a>
                <nav className='mt-10 divide-y divide-white/10 border-y border-white/10'>
                    {links.map((link, idx) => (
                        <a key={link.href} href={link.href} onClick={close} className='flex items-baseline gap-4 py-4'>
                            <span className='font-mono text-xs text-zinc-500'>0{idx + 1}</span>
                            <span className='text-2xl font-semibold tracking-tight text-white'>{link.label}</span>
                        </a>
                    ))}
                </nav>
                <Button href={resume} download="Chayse_McMillan_Resume.pdf" className='mt-auto w-full !py-3'>
                    Download resume <AiOutlineDownload aria-hidden="true" />
                </Button>
            </div>
        </div>
    )
}

export default Navbar
