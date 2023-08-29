import React, {useState, useEffect, useRef} from 'react'
import { AiOutlineHome, AiOutlineCoffee, AiOutlineCodeSandbox, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import '../assets/css/fonts.css';

const Navbar = () => {
    
    // Mobile Navbar Button Ref
    const mobileNavButton = useRef(null);

    // Mobile Nav Transition Animation
    const genericHamburgerLine = 'h-[2px] transition ease transform duration-300 ';
    const [navMobileTransitionState, setNavMobileTransitionState] = useState('h-0 opacity-0');

    // Mobile Nav State Changes
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        if(nav) {
            mobileNavButton.current.blur(); // removing focus
            setNavMobileTransitionState('h-0 opacity-0');

            // Closing Nav
            if(window.scrollY > 0) {
                setMobileNavStyle('bg-white');
                setMobileNavScrollStyle('bg-black');
            } else {
                setMobileNavStyle('bg-transparent');
                setMobileNavScrollStyle('bg-white');
            }
        } else {
            setNavMobileTransitionState('h-screen opacity-100');
            setMobileNavStyle('bg-black');
            setMobileNavScrollStyle('bg-white');
        }

        // Toggle Nav
        setNav(!nav);
        document.body.classList.toggle('overflow-hidden'); // Disable -- enable scroll
    };

    // Navbar Scroll State (Large)
    const [navBarStyle, setNavBarStyle] = useState(0);
    const [navBarTextStyle, setNavBarTextStyle] = useState('text-white');
    const [navBarHoverStyle, setNavBarHoverStyle] = useState('from-white');

    const [mobileNavStyle, setMobileNavStyle] = useState('bg-transparent');
    const [mobileNavScrollStyle, setMobileNavScrollStyle] = useState('bg-white');
    useEffect(() => {
        const handleScroll = (event) => {
            if(window.scrollY > 0) {
                setNavBarStyle('bg-white');
                setNavBarTextStyle('text-black');
                setNavBarHoverStyle('from-black');

                setMobileNavStyle('bg-white');
                setMobileNavScrollStyle('bg-black');
            } else {
                setNavBarStyle('bg-transparent');
                setNavBarTextStyle('text-white');
                setNavBarHoverStyle('from-white');

                setMobileNavStyle('bg-transparent');
                setMobileNavScrollStyle('bg-white');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Navbar Mouse Hover State (Large)
    const [navHomeHoverStyle, setNavHomeHoverStyle] = useState('opacity-0');
    const handleHomeHoverEnter = () => { setNavHomeHoverStyle('opacity-100'); }
    const handleHomeHoverLeave = () => { setNavHomeHoverStyle('opacity-0'); }
    const [navWorkHoverStyle, setNavWorkHoverStyle] = useState('opacity-0');
    const handleWorkHoverEnter = () => { setNavWorkHoverStyle('opacity-100'); }
    const handleWorkHoverLeave = () => { setNavWorkHoverStyle('opacity-0'); }
    const [navProjectsHoverStyle, setNavProjectsHoverStyle] = useState('opacity-0');
    const handleProjectsHoverEnter = () => { setNavProjectsHoverStyle('opacity-100'); }
    const handleProjectsHoverLeave = () => { setNavProjectsHoverStyle('opacity-0'); }
    const [navResumeHoverStyle, setNavResumeHoverStyle] = useState('opacity-0');
    const handleResumeHoverEnter = () => { setNavResumeHoverStyle('opacity-100'); }
    const handleResumeHoverLeave = () => { setNavResumeHoverStyle('opacity-0'); }
    const [navContactHoverStyle, setNavContactHoverStyle] = useState('opacity-0');
    const handleContactHoverEnter = () => { setNavContactHoverStyle('opacity-100'); }
    const handleContactHoverLeave = () => { setNavContactHoverStyle('opacity-0'); }

    // Content
    return (
        <div>
            {/* Mobile Navbar */}
            <div className='md:hidden block'>
                <div className='fixed top-4 right-4 z-[99]'>
                    <button className='relative group' onClick={handleNav} ref={mobileNavButton}>
                        <div className={mobileNavStyle+' relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'}>
                            <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>

                                {/* Button Default
                                <div className={navMobileClickStateColor+' h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10'}></div>
                                <div className={navMobileClickStateColor+' h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75'}></div>
                                <div className={navMobileClickStateColor+' h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150'}></div>

                                <div className='absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12'>
                                    <div className={navMobileClickStateColor+' absolute h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45'}></div>
                                    <div className={navMobileClickStateColor+' absolute h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45'}></div>
                                </div>
                                */}

                                <div className={`${genericHamburgerLine} ${ nav ? "bg-white w-9 rotate-45 translate-y-3 -translate-x-1" : mobileNavScrollStyle+" w-5" }`}/>
                                <div className={`${genericHamburgerLine} ${nav ? "opacity-0" : mobileNavScrollStyle+" w-5" }`} />
                                <div className={`${genericHamburgerLine} ${ nav ? "bg-white w-12 -rotate-45 -translate-y-3 -translate-x-3" : mobileNavScrollStyle+" w-5" }`} />
                                
                            </div>
                        </div>
                    </button>
                </div>

                {/* Mobile Nav Items */}
                <div className={'fixed w-screen duration-700 bg-white z-[98] '+navMobileTransitionState}>

                <div className='pt-8'>
                    <h2 className='PermanentMarkerFont ml-10 text-4xl text-black'>Chayse</h2>
                    <h2 className='PermanentMarkerFont ml-20 text-3xl text-black'>McMillan</h2>
                </div>


                    {/* Mobile Nav Items*/}
                    <div className='w-full bg-white/90 flex flex-col justify-center items-center' style={{ height: '70%'}}>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                            <AiOutlineHome className='text-white' size={20}/>
                            <span className='MontserratBoldFont text-white pl-4'>Home</span>
                        </a>
                        <a href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                            <AiOutlineCoffee className='text-white' size={20}/>
                            <span className='MontserratBoldFont text-white pl-4'>Work</span>
                        </a>
                        <a href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                            <AiOutlineCodeSandbox className='text-white' size={20}/>
                            <span className='MontserratBoldFont text-white pl-4'>Projects</span>
                        </a>
                        <a href='#resume' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                            <AiOutlineUser className='text-white' size={20}/>
                            <span className='MontserratBoldFont text-white pl-4'>Resume</span>
                        </a>
                        <a href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                            <AiOutlineMail className='text-white' size={20}/>
                            <span className='MontserratBoldFont text-white pl-4'>Contact</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Navbar Menu (Large Screen) */}
            <div className='md:block hidden'>
                <div className={'z-[99] flex justify-center px-4 py-4 fixed w-full transition-all duration-700 '+navBarStyle}>

                    {/* Home */}
                    <div onMouseEnter={() => handleHomeHoverEnter()} onMouseLeave={() => handleHomeHoverLeave()}>
                        <a href='#main' className={'MontserratBoldFont pr-10 transition-all duration-700 '+navBarTextStyle}>Home</a>
                        <div className={'flex transition-opacity duration-300 ease-out '+navHomeHoverStyle} style={{marginLeft:'-26px'}}>
                            <div className={'bg-gradient-to-l '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                            <div className={'bg-gradient-to-r '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                        </div>
                    </div>
                    
                    {/* Work */}
                    <div onMouseEnter={() => handleWorkHoverEnter()} onMouseLeave={() => handleWorkHoverLeave()}>
                        <a href='#work' className={'MontserratBoldFont pr-10 transition-all duration-700 '+navBarTextStyle}>Work</a>
                        <div className={'flex transition-opacity duration-300 ease-out '+navWorkHoverStyle} style={{marginLeft:'-28px'}}>
                            <div className={'bg-gradient-to-l '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                            <div className={'bg-gradient-to-r '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                        </div>
                    </div>

                    {/* Projects */}
                    <div onMouseEnter={() => handleProjectsHoverEnter()} onMouseLeave={() => handleProjectsHoverLeave()}>
                        <a href='#projects' className={'MontserratBoldFont pr-10 transition-all duration-700 '+navBarTextStyle}>Projects</a>
                        <div className={'flex transition-opacity duration-300 ease-out '+navProjectsHoverStyle} style={{marginLeft:'-15px'}}>
                            <div className={'bg-gradient-to-l '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                            <div className={'bg-gradient-to-r '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                        </div>
                    </div>

                    {/* Resume */}
                    <div onMouseEnter={() => handleResumeHoverEnter()} onMouseLeave={() => handleResumeHoverLeave()}>
                        <a href='#resume' className={'MontserratBoldFont pr-10 transition-all duration-700 '+navBarTextStyle}>Resume</a>
                        <div className={'flex transition-opacity duration-300 ease-out '+navResumeHoverStyle} style={{marginLeft:'-15px'}}>
                            <div className={'bg-gradient-to-l '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                            <div className={'bg-gradient-to-r '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div onMouseEnter={() => handleContactHoverEnter()} onMouseLeave={() => handleContactHoverLeave()}>
                        <a href='#contact' className={'MontserratBoldFont pr-10 transition-all duration-700 '+navBarTextStyle}>Contact</a>
                        <div className={'flex transition-opacity duration-300 ease-out '+navContactHoverStyle} style={{marginLeft:'-15px'}}>
                            <div className={'bg-gradient-to-l '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                            <div className={'bg-gradient-to-r '+navBarHoverStyle} style={{height: '1px', width: '50px'}}></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar