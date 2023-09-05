import React, {useState} from 'react'
import {  AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import '../assets/css/fonts.css';

const WorkItem = ({ startYear, endYear, companyName, companyLink, title, details, logo, bannerImg }) => {

    // Read More Handlers
    const [readMore, setReadMore] = useState(false);
    const [readMoreButtonText, setReadMoreButtonsText] = useState('Show More');
    const [readMoreDivStyle, setReadMoreDivStyle] = useState('100px');
    const handleReadMoreClick = () => {
        setReadMore(!readMore);
        if(readMore) {
            setReadMoreButtonsText('Show More');
            setReadMoreDivStyle('100px');
        } else {
            setReadMoreButtonsText('Show Less');
            setReadMoreDivStyle('100%');
        }
    };

    return (
        <div className="justify-center flex px-8">
            <div className="relative max-w-6xl mb-8 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">

                {/* Start Year / End Year
                <div className='absolute rounded-full bg-white h-5 py-1 px-2 mt-2 ml-2' style={{left:0}}>
                    <div className="-mt-1.5 MontserratBoldFont">
                        {startYear} - {endYear}
                    </div>
                </div>
                */}
                

                {/* Top Image Content */} 
                <div className='absolute rounded-full bg-white h-14 w-14 p-2 mt-2 mr-2' style={{right:0}}>
                    <img className="object-contain" src={logo} alt="" />
                </div>
                <img className="rounded-t-lg" src={bannerImg} alt="" />

                {/* Start Year / End Year
                <div className='absolute w-full flex justify-center -mt-3'>
                    <div className=' rounded-full bg-white h-6 py-1.5 px-2' style={{right:0}}>
                        <div className="-mt-1.5 MontserratBoldFont">
                            {startYear} - {endYear}
                        </div>
                    </div>
                </div>
                */}

                {/* Main Work Item Text Content */} 
                <div className="p-5">
                    <a href={companyLink} target="_blank" rel="noreferrer">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white MontserratBoldFont">{companyName}</h5>
                    </a>
                    <div className='overflow-hidden' style={{maxHeight: readMoreDivStyle }}>
                        <div className="h-fit text-gray-700 dark:text-gray-400 MontserratRegularFont text-ellipsis">{details}</div>
                    </div>
                    


                    {/* Show More / Less Button*/} 
                    <div className="flex pt-2">{/* justify-center */} 
                        <button onClick={() => handleReadMoreClick()} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg bg-white MontserratBoldFont">{/* bg-gradient-to-r from-white to-[#9ca3af] */} 
                            {readMoreButtonText}

                            {/* Show More / Less Button Arrow */}
                            {readMore ? (
                                <AiOutlineLeft className='pl-1 text-black ' size={20}/>
                            ) : (
                                <AiOutlineRight className='pl-1 text-black ' size={20}/>
                            )}
                        </button>
                    </div>

                    

                    {/* Title - Start Year / End Year
                    <div className="text-white MontserratRegularFont">
                        {startYear} - {endYear} {title}
                    </div>
                    */}
                     
                </div>
            </div>
        </div>




    )
}

export default WorkItem