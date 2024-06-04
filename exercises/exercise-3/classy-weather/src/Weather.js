import React from 'react';
import Day from './Day';

class Weather extends React.Component {
  componentWillUnmount() {}

  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    return (
      <div>
        <h2>
          Weather {this.props.city}{' '}
          <img
            src={`https://flagcdn.com/24x18/${this.props.flag}.png`}
            alt="country flag"
          />
        </h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              date={date}
              max={max.at(i)}
              min={min.at(i)}
              code={codes.at(i)}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
