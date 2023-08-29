import React from 'react'

const WorkItem = ({ startYear, endYear, companyName, companyLink, title, details, logo, bannerImg }) => {
    return (
        <div className="relative mb-8 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className='absolute rounded-full bg-white h-14 w-14 p-2 mt-2 mr-2' style={{right:0}}>
                <img className="object-contain" src={logo} alt="" />
            </div>
            <a href={companyLink} target="_blank" rel="noreferrer">
                <img className="rounded-t-lg" src={bannerImg} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{companyName}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                
                
                
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gradient-to-r from-white to-[#9ca3af] rounded-lg">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default WorkItem