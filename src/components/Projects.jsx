import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='bg-white'>
            <div className='flex justify-center w-full'>
                <div className="py-10">
                    <h2 className='MontserratBoldFont text-center text-black md:text-7xl text-5xl py-2'>Projects</h2>

                    { /* Large Device Underline */}
                    <div className='md:flex hidden' >
                        <div className='bg-gradient-to-l from-black' style={{height: '2px', width: '240px'}}></div>
                        <div className='bg-gradient-to-r from-black' style={{height: '2px', width: '240px'}}></div>
                    </div>

                    { /* Small Device Underline */}
                    <div className='md:hidden flex' >
                        <div className='bg-gradient-to-l from-black' style={{height: '2px', width: '140px'}}></div>
                        <div className='bg-gradient-to-r from-black' style={{height: '2px', width: '140px'}}></div>
                    </div>
                </div>
            </div>

            { /* Project Items */}            
        </div>
  )
}

export default Projects