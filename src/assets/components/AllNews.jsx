import React, {useContext} from 'react';
import Box from '../../UI/Box';
import Text from '../../UI/Text';
import {useNewsContext} from '../../context/NewsContext';
import {NavLink } from 'react-router-dom';

const AllNews = () => {
    const news = useNewsContext();

    console.log("news", news.allNews);    
    // console.log("news", news.allNews.length);  
    // console.log("news123", news.allNews.news);  
    
  return (
    <section>       

        {
            news.allNews.length===0?
            (
                <h1>
                    Loading data ...
                </h1>
            )
            :
            news.allNews.news?.map((news,i) =>
                (
                    <Box className="bg-white mt-6 rounded p-4 " key={i}>

                        <Box className="grid grid-cols-4 gap-4">
                            <Box className="col-span-3">
                                <Text className="font-bold text-lg">
                                    {news.title}
                                </Text>

                                <Text>
                                    {news.description}
                                </Text>

                                <Box className="flex space-x-6 text-textColor opacity-60 font-xs">
                                    <Text>
                                        {news.source.name}
                                    </Text>

                                    <Text>
                                        {news.publishedAt}
                                    </Text>
                                </Box>
                            </Box>

                            <Box>
                                <img
                                    src={news.urlToImage}
                                    alt="picture of a phone"
                                    className='h-full w-full rounded'
                                />
                            </Box>
                        </Box>

                        <Box className="text-textColor text-base font-bold">                            
                            <a href={news.url}>
                                Read more from original source
                            </a>
                        </Box>
                    </Box>
                )
            )                        
        }        


    </section>
  )
}

export default AllNews