import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const {id} = useParams();
  const  data = useLoaderData();
  
  useEffect(() =>{
    if(id == '0') {
        setCategoryNews(data)
        return;
    }
    else if(id == '1'){
        const breakingNews = data.filter(category => category.others.is_today_pick == true);

        setCategoryNews(breakingNews)
        return;
    }
    else{
        const filterNews = data.filter(category => category.category_id == id);
  setCategoryNews(filterNews)
    }

  }, [data, id])
    return (
        <div>
            <h1 className='font-bold text-2xl'>total {categoryNews.length} news pound</h1>
            <div>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;