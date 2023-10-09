import React from 'react'
import '../assets/css/fonts.css';
import { AiOutlineSend } from 'react-icons/ai';

const ContactForm = () => {
    return (
        <div className="justify-center flex px-8 md:pb-28 pb-20">
            <form action='https://getform.io/f/06ce6abb-c193-4e23-bbee-a060bbb55ba3' method='POST' encType='multipart/form-data' className="relative rounded-lg bg-[#27272a] bg-opacity-75 md:w-6/12">

                {/* Main Content */} 
                <div className="p-5">
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2 MontserratBoldFont text-white'>Name</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300 MontserratRegularFont' type='text' name='name'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2 MontserratBoldFont text-white'>Phone</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300 MontserratRegularFont' type='text' name='phone'/>
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 MontserratBoldFont text-white'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300 MontserratRegularFont' type='email' name='email'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 MontserratBoldFont text-white'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300 MontserratRegularFont' placeholder='Let me know how I can help.' type='text' name='subject'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 MontserratBoldFont text-white'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-300 MontserratRegularFont' placeholder='Leave a comment...' rows='10' name='message'></textarea>
                    </div>

                    { /* Large Device Button*/ }
                    <div className='md:block hidden'>
                        <div className='justify-center flex'>
                            <button className='bg-black text-white mt-4 w-1/2 p-4 rounded-lg'>
                                <div className='justify-center flex'>
                                    <div className='pr-2 MontserratBoldFont'>Send Message</div>
                                    <AiOutlineSend className='text-white mt-1' size={20}/>
                                </div>
                            </button>
                        </div>
                    </div>

                    { /* Small Device Button*/ }
                    <div className='md:hidden block'>
                        <button className='bg-black text-white mt-4 w-full p-4 rounded-lg'>
                            <div className='justify-center flex'>
                                <div className='pr-2 MontserratBoldFont'>Send Message</div>
                                <AiOutlineSend className='text-white mt-1' size={20}/>
                            </div>
                        </button>
                    </div>
                </div>

            </form>
        </div>

    )
}

export default ContactForm