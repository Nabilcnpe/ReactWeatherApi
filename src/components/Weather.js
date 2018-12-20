import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div className="weather__info">
        {this.props.validate === true &&
          <div>
            <p  className="weather__key" style={{color: '#FA4659'}}> City : <span className="weather__value">{this.props.city}</span></p>
            <p  className="weather__key" style={{color: '#FA4659'}}> Country : <span className="weather__value">{this.props.country}</span></p>
            <p  className="weather__key" style={{color: '#FA4659'}}> Humidity : <span className="weather__value">{this.props.humidity}</span></p>
            <p  className="weather__key" style={{color: '#FA4659'}}> Temperature : <span className="weather__value">{this.props.temperature}</span></p>
            <p  className="weather__key" style={{color: '#FA4659'}}> description : <span className="weather__value">{this.props.description}</span></p>
        </div>
        }
        <div>
          <h1>{this.props.error}</h1>
        </div>
      </div>
    )
  }
}

export default Weather;
