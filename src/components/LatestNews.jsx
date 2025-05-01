import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='w-11/12 mx-auto my-10 flex gap-3 items-center bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary py-2 px-3'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, fuga!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, fuga!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, fuga!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, fuga!</p>
            </Marquee>
           
        </div>
    );
};

export default LatestNews;