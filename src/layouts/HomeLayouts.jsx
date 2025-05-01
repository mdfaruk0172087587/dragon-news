import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LiftAside from '../aside/LiftAside';
import RightAside from '../aside/RightAside';

const HomeLayouts = () => {
    return (
        <div>
           <header>
            <Header></Header>
            <section>
                <LatestNews></LatestNews>
            </section>
            <section>
                <Navbar></Navbar>
            </section>
           </header>
           <main className='w-11/12 mx-auto my-8  grid grid-cols-12 gap-3'>
           <aside className='col-span-3 sticky top-0 h-fit'>
            <LiftAside></LiftAside>
           </aside>
            <section className="main col-span-6">
                <Outlet></Outlet>
            </section>
           <aside className='col-span-3 sticky top-0 h-fit'>
            <RightAside></RightAside>
           </aside>
           </main>
        </div>
    );
};

export default HomeLayouts;