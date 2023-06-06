import React, { useContext } from 'react'
import weatherContext from '../contexts/weatherContext'
import { Link } from 'react-router-dom';

function Main() {
  const { search, details, condition, locDetails, loading } = useContext(weatherContext);//Getting values from context (weatherContext in this case).

  let last_updated_date = new Date(details.last_updated);
  document.title=`Weather of ${search}`
  return (
    <>
      {!search &&//If the search field is empty ,then show this...
        <div className='text-center'><h1>Enter a Place Name...</h1></div>
      }

      {search &&
        !loading &&
        <div className="p-5 my-4 mb-4 bg-body-tertiary rounded-3 container">

          <div className="container-fluid py-5">
            <div className='my-2 d-flex justify-content-center align-items-center flex-wrap'>
              <h1 className="display-5 fw-bold mx-3">Weather of "{search}" </h1>
              <h2 className='mx-3'>(Country: {locDetails.country})</h2>
            </div>

            <div className="col-md-8 fs-4">
              {/* This Paragraph is for last_updated_date */}
              <p>Last Updated: {last_updated_date.getHours() + ':' + last_updated_date.getMinutes() + ':' + last_updated_date.getSeconds()}</p>

              {/* This Paragraph is for Condition */}
              <p>Condition: {condition.current.text}<img src={`http:${condition.current.icon}`} alt="Not Found..." /></p>

              {/* This Paragraph is for Temp,Humidity */}
              <p>Temperature: {details.temp_c || details.error}</p>
              <p>Humidity: {details.humidity || details.error}</p>
            </div>

            {/* This is a button to get forecast of the given area */}
            <div className="forecast d-flex justify-content-center">
              {!details.error &&//If there is no error ,then show this button
                <Link type="button" className="btn btn-danger" to={`/forecast/${search}`}>View forecast of {search}</Link>
              }
            </div>
          </div>
        </div>
      }
      <hr></hr>
    </>
  )
}

export default Main