import React, { useState, useEffect, useRef } from 'react'
import weatherContext from './weatherContext'

export default function WeatherProvider(props) {
  //States
  const [search, setSearch] = useState('Ahmedabad');
  const [details, setDetails] = useState({});
  const [locDetails, setLocDetails] = useState({});
  const [forecasts, setForecasts] = useState([])

  //Refs
  const condition = useRef(0)


  useEffect(() => {

    const fetchWeather = async () => {
      let url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${search}&days=${props.days}&aqi=yes&alerts=yes`;

      let response = await fetch(url);

      if (response.status === 200) {

        let jsonData = await response.json()
        //Setting States
        setDetails(jsonData.current);
        setLocDetails(jsonData.location)
        setForecasts(jsonData.forecast.forecastday)

        //Setting Refs
        condition.current = jsonData.current.condition;
                                                  
      } else {//If response status is not 200 ,then set states and refs to this:(See Below)

        setLocDetails({ "country": "No Data Found" })
        setDetails({ 'error': 'No Data Found' })
        condition.current = { text: "No Data Found" };
        
      }

    }
    fetchWeather();
    // eslint-disable-next-line
  }, [search])
  
  return (
    <>
      <weatherContext.Provider value={{ search, setSearch, details, setDetails, condition, locDetails,forecasts }}>
        {props.children}
      </weatherContext.Provider>
    </>
  )
}
