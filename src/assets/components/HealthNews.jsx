import React from 'react';
import Box from '../../UI/Box';
import Text from '../../UI/Text';
import { useNewsContext } from '../../context/NewsContext';

const HealthNews = () => {
    const news = useNewsContext();

    return(
        <section>
             {
            news.healthNews.length===0?
            (
                <h1>
                    Loading data ...
                </h1>
            )
            :
            news.healthNews.news.slice(0,1)?.map((news,i) =>
                (
                    <Box className="bg-white p-4 grid grid-cols-4 gap-4" key={i}>

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
                )
            )                        
        }

        {
            news.healthNews.length===0?
            (
                <h1>
                    Loading data ...
                </h1>
            )

            :

            (
            <Box className="mt-6 grid grid-cols-2 gap-4 gap-y-6">
                {
                    news.healthNews.news.slice(1)?.map((news,i)=>(
                        <Box
                            key={i}                             
                        >
                            <Box className="bg-white p-4  gap-2">
                                <Box className="flex">
                                    <Box className="flex-1">
                                        <Text className="font-bold text-lg">
                                            {news.title}
                                        </Text>                                                                                                    
                                    </Box>
            
                                    <Box className="flex-1">
                                        <img
                                            src={news.urlToImage}
                                            alt="game art pics"
                                            className='h-auto w-full rounded'
                                        />
                                    </Box>
                                </Box>  

                                <Text className="">
                                    {news.description}
                                </Text>  

                                <Box className="flex justify-between space-x-6 text-textColor opacity-60 font-xs">
                                    <Text>
                                        {news.source.name}
                                    </Text>
    
                                    <Text>
                                        {news.publishedAt}
                                    </Text>
                                </Box>
                            </Box>                           
                        </Box>
                    ))
                }
            </Box>
            )
        }
        </section>
    )
}

export default HealthNews