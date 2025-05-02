import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    
    const {details, title, image_url, category_id} = news;
    return (
        <div>
            <h1 className='mb-5 text-2xl font-bold'>Dragon news</h1>
            <img className='w-full h-[350px] object-cover' src={image_url} alt="" />
            <h1 className='text-2xl font-bold my-3'>{title}</h1>
            <p>{details}</p>

            <Link to={`/category/${category_id}`} className='btn btn-secondary mt-4'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;