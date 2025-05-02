import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import RightAside from '../aside/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {

    const [news, setNews] = useState({})
    const data = useLoaderData();
    const {id} = useParams();
   
    useEffect(() => {
        const newsFind = data.find(singleNews => singleNews.id == id);
        setNews(newsFind)
    }, [data, id])

  
    return (
        <div>
           <header className='py-4'>
            <Header></Header>
           </header>
           <main className='grid grid-cols-12 gap-5 mt-16 mx-auto w-11/12'>
            <section className='col-span-9 sticky top-0 h-fit'>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;