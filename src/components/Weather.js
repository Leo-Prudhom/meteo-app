import React from 'react';

const Weather = (props) => {
    return(
        <div className='wheatherInfos'>
            {/*Equivalent a if(this.props.temp ===true) { /**//*}*/}
            {props.temperature && <p>Temperature : {props.temperature}°C</p>}
            {props.city && props.country && <p>Location : {props.city}, {props.country}</p>}
            {props.humidity && <p>Humidity : {props.humidity}</p>}
            {props.description && <p>Description : {props.description}</p>}
            {props.error && <p>Ooops, looks like you set wrong values. Please try aigain with valid country code (ex: UK, US, FR) and city</p>}
        </div>
    );}

export default Weather;