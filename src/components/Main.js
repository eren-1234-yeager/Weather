import React, { useContext } from 'react'
import weatherContext from '../contexts/weatherContext'

function Main() {
  const { search, details, condition, locDetails } = useContext(weatherContext);
  let last_updated_date = new Date(details.last_updated);
  return (
    <>
      <div className="p-5 my-4 mb-4 bg-body-tertiary rounded-3">

        <div className="container-fluid py-5">
          <div className='my-2 d-flex justify-content-center align-items-center flex-wrap'>
            <h1 className="display-5 fw-bold mx-3">Weather of "{search}" </h1>
            <h2 className='mx-3'>(Country: {locDetails.country})</h2>
          </div>
          <div className="col-md-8 fs-4">
            <p>Last Updated: {last_updated_date.getHours() + ':' + last_updated_date.getMinutes() + ':' + last_updated_date.getSeconds()}</p>
            <p>Condition: {condition.current.text}<img src={`http:${condition.current.icon}`} alt="404" /></p>
            <p>Temperature: {details.temp_c || details.error}</p>
            <p>Humidity: {details.humidity || details.error}</p>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default Main