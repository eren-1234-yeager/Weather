import React, { useContext, useEffect } from 'react'
import weatherContext from '../contexts/weatherContext'
import { useParams } from "react-router-dom";

export default function Forecast() {
    const { forecasts, setSearch } = useContext(weatherContext)//-->This is an array containing forecast details of n days... So i can use .map() 
    const { city } = useParams();
    useEffect(() => {

        setSearch(city);
        // eslint-disable-next-line 
    }, [city])

    return (
        <>
            {city &&
                <div>
                    <h1 className='text-center my-2'>Forecast of {city}</h1>
                    <div className="container my-4 d-flex justify-content-center flex-wrap ">

                        {forecasts.map((forecast) => {

                            return <div key={forecast.date} className="card mx-2 my-2" style={{ "width": "18rem" }}>
                                <div className="condition d-flex">
                                    <img src={`http:${forecast.day.condition.icon}`} className="card-img-top" alt="..." style={{ 'width': '100px' }}></img>
                                    <p className='text-right'><b><span class="badge bg-danger">{forecast.day.condition.text}</span></b></p>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{forecast.date}</h5>

                                    <h6 className="card-subtitle mb-2 text-body-secondary">Max Temp: {forecast.day.maxtemp_c}</h6>

                                    <h6 className="card-subtitle mb-2 text-body-secondary">Min Temp: {forecast.day.mintemp_c}</h6>

                                    <h6 className="card-subtitle mb-2 text-body-secondary">Average Temp: {forecast.day.avgtemp_c}</h6>

                                    <h6 className="card-subtitle mb-2 text-body-secondary">Average Humidity: {forecast.day.avghumidity}</h6>

                                    <p className="card-text">Sunrise: {forecast.astro.sunrise}</p>
                                    <p className="card-text">Sunset: {forecast.astro.sunset}</p>
                                    <hr />
                                    <p className="card-text">Moonrise: {forecast.astro.moonrise}</p>
                                    <p className="card-text">Moonset: {forecast.astro.moonset}</p>

                                    {/* <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a> */}
                                </div>
                            </div>
                        }
                        )
                        }
                    </div>
                </div>
            }
            <hr />
        </>
    )
}
