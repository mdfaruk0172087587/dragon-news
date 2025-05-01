import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold mb-3'>Find Us On</h1>

            <div className="join join-vertical w-full">
                <button className="btn join-item bg-base-100 justify-start"><FaFacebook size={24}></FaFacebook> Facebook</button>
                <button className="btn join-item bg-base-100 justify-start"><FaTwitter size={24}></FaTwitter> Twitter</button>
                <button className="btn join-item bg-base-100 justify-start"><FaInstagram size={24}></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;