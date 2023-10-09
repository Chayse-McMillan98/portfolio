import React from 'react'

const Title = ({ text, largeDeviceUnderline, smallDeviceUnderline }) => {
  return (
    <div>
        <div className='flex justify-center w-full'>
            <div className="relative py-16">
                <h2 className='MontserratBoldFont text-center text-black md:text-7xl text-5xl'>{text}</h2>
                <div className="py-2">

                    { /* Large Device Underline */}
                    <div className='md:flex hidden' >
                        <div className='bg-gradient-to-l from-black' style={{height: '2px', width: largeDeviceUnderline}}></div>
                        <div className='bg-gradient-to-r from-black' style={{height: '2px', width: largeDeviceUnderline}}></div>
                    </div>

                    { /* Small Device Underline */}
                    <div className='md:hidden flex' >
                        <div className='bg-gradient-to-l from-black' style={{height: '2px', width: smallDeviceUnderline}}></div>
                        <div className='bg-gradient-to-r from-black' style={{height: '2px', width: smallDeviceUnderline}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Title