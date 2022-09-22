import React, { useContext, createContext } from 'react';
import useFetch from '../useFetch';

const AllNewsContext =  createContext();

export function NewsContextProvider({children}) {
    
    const [allNews] = useFetch(`https://current-news.p.rapidapi.com/news`,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'af8c59034cmshb77651f0711720ap1f5705jsndedce9489dc7',
            'X-RapidAPI-Host': 'current-news.p.rapidapi.com'
        }
    });

    const [businessNews] = useFetch(`https://current-news.p.rapidapi.com/news/business`,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'af8c59034cmshb77651f0711720ap1f5705jsndedce9489dc7',
            'X-RapidAPI-Host': 'current-news.p.rapidapi.com'
        }
    });

    const extra = "yes";
    const value = {
        allNews,
        extra,
        businessNews
    }

    return (
        <AllNewsContext.Provider value={value}>
            {children}
        </AllNewsContext.Provider>
    )
}

export function useNewsContext(){
    const context = useContext(AllNewsContext);
    if(context===undefined){
        throw new Error("context must be used within a provider");
    }
    return context
}
