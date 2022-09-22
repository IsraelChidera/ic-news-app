import React, { useContext } from 'react';
import { useNewsContext } from '../../context/NewsContext';

const WorldNews = () => {
    const news = useNewsContext();
    console.log(news);
    return(
        <section className="bg-primary h-screen">
            WorldNews
        </section>
    )
}

export default WorldNews