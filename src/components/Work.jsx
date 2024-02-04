import React from 'react';
import WorkItem from './WorkItem';
import Title from './Title';
import backgroundImg from '../assets/images/sawtooth.jpg';
import kilnPC from '../assets/images/kilnPC.jpeg';
import clickAndCollect from '../assets/images/clickAndCollect.png';
import '../assets/css/fonts.css';

// Work Images (1425 x 950)
import dakcsImg from '../assets/images/dakcs.png';
import io1440Img from '../assets/images/io1440.png';

const data = [
    {
        startYear: '2019',
        endYear: '2021',
        companyName: 'DAKCS',
        companyLink: 'https://www.dakcs.com/',
        title: 'Software Developer',
        details: 'Throughout my tenure at DAKCS, an esteemed player in the Collection Software sector with a legacy dating back to 1980, I had the privilege of contributing to a dynamic team. Our software development efforts were anchored in languages such as C, Java, C++, Python, MySQL, and shell scripting. The company\'s moderate size, employing 20-30 individuals, was complemented by our closely-knit team of 5-6 members, which facilitated seamless collaboration. This cohesion allowed us to create impactful solutions that aligned with industry standards and met client requisites. My experience at DAKCS was defined by the opportunity to engage with cutting-edge technologies within the Collection Software domain, alongside a cohesive team that significantly enriched my professional journey.',
        logo: dakcsImg,
        bannerImg: clickAndCollect
    },
    {
        startYear: '2021',
        endYear: 'Present',
        companyName: '1440',
        companyLink: 'https://www.1440.io/',
        title: 'Software Engineer',
        details: 'At 1440, a pioneering eCommerce firm established in 2009, my current role remains pivotal. With Salesforce as our bedrock, I leverage technologies like JavaScript (LWC), Visualforce, Apex, SOQL, and Flow. Notably, I am responsible for crafting code for prominent clients such as Playboy, Goodwill Finds, Chalktalk Sports, and Scotts Lawn and Garden, among others.\n\nMy spectrum of responsibilities extends to seamless integration with external systems like Shopify, Amazon, eBay, Magento, and SFCC. I proficiently integrate diverse shipping channels like Desktop Shipper, Ship Junction, and Shippo. Payment integrations, encompassing Paypal and Stripe, are a seamless part of my ongoing portfolio. Alongside, I continue to deepen my expertise in technologies like SF OMS, ERP, WMS, and SF OCI. My journey with 1440 is a continuous evolution, defined by hands-on work across technologies and integrations, contributing significantly to the company\'s eCommerce prominence.',
        logo: io1440Img,
        bannerImg: kilnPC
    }
];

const Work = () => {
    return (
        <div id='work' className='relative bg-white'>

            { /* Background Img */}
            <div className='absolute w-full h-full'>
                <img className='absolute w-full h-full object-cover' src={backgroundImg} alt="logo" />
                <div className='absolute w-full h-1/6 bg-gradient-to-b from-[#969696] to-transparent' style={{ top:0 }}></div>
                <div className='absolute w-full h-1/6 bg-gradient-to-t from-[#969696] to-transparent' style={{ bottom:0 }}></div>
            </div>

            { /* Section Title */}
            <Title
                text='Work'
                largeDeviceUnderline='200px'
                smallDeviceUnderline='100px'
            ></Title>
            
            { /* Work Items */}
            {data.map((item, idx)=> (
                <WorkItem
                    key={idx} 
                    startYear={item.startYear} 
                    endYear={item.endYear}
                    companyName={item.companyName}
                    title={item.title}
                    details={item.details}
                    logo={item.logo}
                    bannerImg={item.bannerImg}
                    companyLink={item.companyLink}
                />
            ))}
        </div>
    )
}

export default Work