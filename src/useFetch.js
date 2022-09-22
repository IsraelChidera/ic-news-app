import React, {useState, useEffect} from 'react';

const useFetch = (url, options) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
               await fetch(url, options)
                .then((res) => res.json())
                .then((data) => setData(data));
            } catch(error){
                console.log("Error: ", error);
            }
        }
        
        fetchData();
    }, []);

    return [data];
}

export default useFetch