import React, { useState,useEffect, useRef } from 'react'
import weatherContext from './weatherContext'

export default function WeatherProvider(props) {
  const [search, setSearch] = useState('Ahmedabad');
  const [details, setDetails] = useState({});
  const [locDetails, setLocDetails] = useState({})
  const condition=useRef(0)

 
  useEffect(() => {
    
    const fetchWeather=async()=>{
        let url=`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${search}&aqi=no`;

        let response=await fetch(url);

        if(response.status===200){
  
            let jsonData=await response.json()
            // console.log(jsonData)
            setDetails(jsonData.current);
            setLocDetails(jsonData.location)
            condition.current=jsonData.current.condition;
          }else{
            setLocDetails({"country":"No Data Found"})
            console.log(locDetails);
            setDetails({'error':'No Data Found'})
            condition.current={text:"No Data Found"};
        }

    }
    fetchWeather();
     // eslint-disable-next-line
}, [search])
  return (
    <>
      <weatherContext.Provider value={{ search, setSearch, details, setDetails ,condition,locDetails}}>
        {props.children}
      </weatherContext.Provider>
    </>
  )
}
