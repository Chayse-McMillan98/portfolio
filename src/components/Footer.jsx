import React from 'react'
import '../assets/css/fonts.css';
import viteLogo from '../assets/images/vite.png';
import reactLogo from '../assets/images/react.png';
import tailwindLogo from '../assets/images/tailwind.png';

const Footer = () => {
  return (
    <footer className="bg-white">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <div className="flex items-center">
                <p className="text-black MontserratRegularFont">Built By Me, Powered By:</p>
                <div className="flex w-48">
                    <img className='object-contain h-8' style={{width: '50px'}} src={viteLogo} alt="logo" />
                    <img className='object-contain h-8' style={{width: '50px'}} src={reactLogo} alt="logo" />
                    <img className='object-contain h-8' style={{width: '70px'}} src={tailwindLogo} alt="logo" />
                </div>
            </div>






        </div>
    </footer>
  )
}

export default Footer