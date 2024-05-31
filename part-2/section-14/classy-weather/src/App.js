import React from 'react';
import Weather from './Weather';
import Input from './Input';

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

class App extends React.Component {
  state = {
    location: '',
    isLoading: false,
    displayLocation: '',
    weather: {},
  };

  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   location: 'Oslo',
  //   //   isLoading: false,
  //   //   displayLocation: '',
  //   //   weather: {},
  //   // };
  //   // this.fetchWeather = this.fetchWeather.bind(this);
  // }

  fetchWeather = async () => {
    if (this.state.location.length < 2) return this.setState({ weather: {} });

    try {
      this.setState({ isLoading: true });
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error('Location not found');

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);

      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  setLocation = (e) => this.setState({ location: e.target.value });

  // close to useEffect []
  componentDidMount() {
    // this.fetchWeather();

    this.setState({ location: localStorage.getItem('location') || '' });
  }

  // close to useEffect [location]
  componentDidUpdate(previousProps, previousState) {
    if (this.state.location !== previousState.location) {
      this.fetchWeather();

      localStorage.setItem('location', this.state.location);
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <Input
          location={this.state.location}
          onChangeLocation={this.setLocation}
        />

        {/* <button onClick={this.fetchWeather}>Get weather</button> */}

        {this.state.isLoading && <p className="Loader">Loading...</p>}

        {this.state.weather.weathercode && (
          <Weather
            weather={this.state.weather}
            location={this.state.displayLocation}
          />
        )}
      </div>
    );
  }
}

export default App;
