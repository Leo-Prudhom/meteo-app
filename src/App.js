import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import MyMap from './components/MyMap';

const API_KEY = 'aaac71d742e60720d7eb8d0a0194e97b';

class App extends Component {
  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    coord :{
      lat : undefined,
      lon : undefined
    },
    error : undefined

  }

  //async await => fait une requete mais attend la resolution d'une promesse avt
  getWeather = async (e) => {
    e.preventDefault();//evite de recharger tte la page

    const city = e.target.elements.city.value; //se réfère au input city du component Form
    const country = e.target.elements.country.value; //se réfère au input country du component Form
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); 
    
    const data = await api_call.json();

    if(city && country) {
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        coord : {
          lat : data.coord.lat,
          lon : data.coord.lon
        },
        error :''
      })

      console.log(data);
    }
    else {
      this.setState({
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error :'Ooops, it\'s looks like you set wrong values. Please try aigain with valid country code (ex: UK, US, FR) and city'
      })
    }
   
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                  <MyMap 
                    coord={this.state.coord}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
