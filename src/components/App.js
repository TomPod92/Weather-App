import React from "react";
import Header from "./Header.js";
import SideButton from "./SideButton.js";
// import SideButtonClose from "./SideButtonClose.js";
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
    gotData: false,
    foreCast: null
  };

  handleOpenSidePanel = (e) => {

    if(e) e.stopPropagation();
    // e.stopPropagation()
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
          status:response.ok,
          foreCast: null
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
          gotData: true,
          value:''
      }))
    })
    // if something went wrong
    .catch(error => {
      this.setState({
        gotData: true,
        status: false,
        city: this.state.value,
        value:'',
        foreCast: null
      })
    })

  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleForeCast = () => {
    const APIKEY = '56ba80aa326c4d258307380c4713b0b3';

    // get data from API (for 5 days)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${APIKEY}&units=metric`)
    //
    .then(response => {
      if(response.ok) return response
    })
    // change response to json
    .then(response => response.json())
    // push one foreCast from each day to an array and update the state with it
    .then(data => {
      const foreCast = [];
      
      data.list.map( (current,index) => {
        let i = index.toString();

        if(i[0]=== '4' || i[1] === '4') foreCast.push(current)
        return undefined
      })

      this.setState({
        foreCast:foreCast
      })

      this.handleOpenSidePanel();
    })
  }

  render() {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <Header handleOpenSidePanel={this.handleOpenSidePanel} />

        <SideButton handleOpenSidePanel={this.handleOpenSidePanel}/>

        <SidePanel
          active={this.state.sidePanelOpen}
          handleOpenSidePanel={this.handleOpenSidePanel}
          weather={this.state.foreCast}
        />

        <Overlay
          active={this.state.sidePanelOpen}
          handleOpenSidePanel={this.handleOpenSidePanel}
        />

        <Form value={this.state.value} onSubmit={this.handleFormSubmit} onChange={this.handleInputChange}/>

        {this.state.gotData ? <Weather weather={this.state} handleForeCast={this.handleForeCast}/> : <div className="info">Wyszukaj miasto</div>}
      </div>
    );
  }
}

export default App;
