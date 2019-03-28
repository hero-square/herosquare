import {useState,useEffect} from 'react';

export const useFetchAPI = (url, defaultResponse) => {
  const [data, setData] = useState(defaultResponse)
    
  const fetchData = async url => {
    try {
      const res = await fetch(url);
      console.log(res)
      const data = await res.json();
      setData({
        isLoading:false,
        data,
      })

    } catch (e) {
      console.error(e);
    }
  };

  useEffect(()=>{
    fetchData(url);
  },[])

  return data;
};
