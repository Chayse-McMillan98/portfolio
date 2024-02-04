import React from 'react'
import '../assets/css/fonts.css';

const ProjectItem = ({ name, projectLink, bannerImg, languages }) => {

    // Opens the Project Link
    const openProjectLink = () => {
        window.open(projectLink, "_blank");
    }

    return (
        <div className="justify-center flex px-8 hover:opacity-80 transition-opacity" style={{cursor: 'pointer'}} onClick={openProjectLink}>
            <div className="relative max-w-6xl mb-8 bg-white rounded-lg ">

                {/* Top Image Content */} 
                <img className="rounded-t-lg" src={bannerImg} alt="" style={{aspectRatio:'16 / 11'}}/>

                {/* Main Work Item Text Content */} 
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black MontserratBoldFont">{name}</h5>
                
                    {/* Show More / Less Button*/} 
                    <div className="flex pt-2">
                        {languages.map((item, idx)=> (
                            <div key={idx} className='pr-2'>
                                <div className='border-solid border-2 border-black rounded-lg px-2'>
                                    <div className='flex'>
                                        <div className='pr-1'>
                                            {item.language}
                                        </div>
                                        <div className='mt-1'>
                                            <item.icon/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem