import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../components/FindUs';
import QZone from '../components/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-9'>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <QZone></QZone>
        </div>
    );
};

export default RightAside;