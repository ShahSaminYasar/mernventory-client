import React from 'react';
import bannerImg from '../../assets/BannerImg/BannerImg.jpg';

const bgImg = {
       backgroundImage: `url(${bannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: '85% 50%',
    display: 'block',
    minHeight: '50vh',
};

const Banner = () => {
    return (
        <div style={bgImg}>
            <div className='w-96 md:w-full text-left lg:w-full xl:w-2/4 pt-28 pl-5 lg:pl-24 xl:pl-56 '>
                <h1 className='text-4xl lg:text-5xl xl:text-6xl text-white'>Global Supply Chain <br /> Management</h1>
                <p className='text-white py-4'>Get unprecedented control over your end-to-end supply chain. </p>
                <button className="btn bg-white text-black">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;
