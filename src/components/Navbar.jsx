import React, {useState, useEffect, useRef} from 'react'
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
        } else {
            setNavMobileTransitionState('h-screen opacity-100');
        }

        // Toggle Nav
        setNav(!nav);
        document.body.classList.toggle('overflow-hidden'); // Disable -- enable scroll
    };

    // Navbar Scroll State (Large)
    const [navBarStyle, setNavBarStyle] = useState(0);
    const [navBarTextStyle, setNavBarTextStyle] = useState('text-white');
    const [navBarHoverStyle, setNavBarHoverStyle] = useState('from-white');
    const [mobileNavScrollStyle, setMobileNavScrollStyle] = useState('bg-white');
    useEffect(() => {
        const handleScroll = (event) => {
            if(window.scrollY > 0) {
                setNavBarStyle('bg-white');
                setNavBarTextStyle('text-black');
                setNavBarHoverStyle('from-black');
                setMobileNavScrollStyle('bg-black');
            } else {
                setNavBarStyle('bg-transparent');
                setNavBarTextStyle('text-white');
                setNavBarHoverStyle('from-white');
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
                        <div className={navBarStyle+' relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'}>
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

                                <div className={`${genericHamburgerLine} ${ nav ? "bg-black w-9 rotate-45 translate-y-3 -translate-x-1" : mobileNavScrollStyle+" w-5" }`}/>
                                <div className={`${genericHamburgerLine} ${nav ? "opacity-0" : mobileNavScrollStyle+" w-5" }`} />
                                <div className={`${genericHamburgerLine} ${ nav ? "bg-black w-12 -rotate-45 -translate-y-3 -translate-x-3" : mobileNavScrollStyle+" w-5" }`} />
                                
                            </div>
                        </div>
                    </button>
                </div>

                {/* Mobile Nav Items */}
                <div className={'fixed w-screen duration-700 bg-white z-[98] '+navMobileTransitionState}>
                    <div className='relative'>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
                        <div>Test-1 Test-1 Test-1</div>
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