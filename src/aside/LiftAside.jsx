import React, { Suspense } from 'react';
import Categories from '../components/Categories';

const LiftAside = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
           <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default LiftAside;