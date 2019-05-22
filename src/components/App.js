import React from "react";
import Header from "./Header.js";
import SidePanel from "./SidePanel.js";
import Overlay from "./Overlay.js";
import Form from "./Form.js"
import Weather from "./Weather.js"

class App extends React.Component {
  state = {
    sidePanelOpen: false,
    value:'',
    city:'',
    longitude:'',
    latitude:'',
    temp:'',
    temp_min:'',
    temp_max:'',
    pressure:'',
    humidity:'',
    wind:'',
    sunrise:'',
    sunset:'',
    status: false,
    gotData: false
  };

  handleOpenSidePanel = () => {
    this.setState(prevState => ({
      sidePanelOpen: !prevState.sidePanelOpen
    }));
  };

  handleFormSubmit = (event) => {
    const APIKEY = '56ba80aa326c4d258307380c4713b0b3';

    // prevent reloading the page on form submit
    event.preventDefault();

    // get data from OPENWEATHERMAP api
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKEY}&units=metric`)
    // if everything went ok set "status" to true
    .then(response => {
      if(response.ok) {
        this.setState({
          status:response.ok
        })
        return response
      } 
      throw Error(response.status)
    })
    // change response to json
    .then(response => response.json())
    // update the state with that json
    .then(data => {
      this.setState( prevState => (
        {
          city: prevState.value,
          longitude: data.coord.lon,
          latitude: data.coord.lat,
          temp: data.main.temp,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          gotData: true
      }))
    })
    // if something went wrong
    .catch(error => {
      this.setState({
        gotData: true,
        status: false
      })
    })

  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  fun1 = () => {
    console.log('pierwsza')
  }

  fun2 = () => {
    console.log('druga')
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Header handleOpenSidePanel={this.handleOpenSidePanel} />

        <SidePanel
          active={this.state.sidePanelOpen}
          handleOpenSidePanel={this.handleOpenSidePanel}
        />

        <Overlay
          active={this.state.sidePanelOpen}
          handleOpenSidePanel={this.handleOpenSidePanel}
        />

        <Form value={this.state.value} onSubmit={this.handleFormSubmit} onChange={this.handleInputChange}/>

        {this.state.gotData ? <Weather weather={this.state} fun1={this.fun1} fun2={this.fun2}/> : <div>Wyszukaj miasto</div>}
        
        
      </div>
    );
  }
}

export default App;
