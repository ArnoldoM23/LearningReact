import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts'
import GoogleMap from '../components/google_maps'

class WeatherList extends Component {
	
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp)
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;
		console.log(lon , lat)

		return(
			<tr key={name}>
				<td id='google'><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color='green' units="K" /></td>
				<td><Chart data={pressure} color='purple' units="hPa" /></td>
				<td><Chart data={humidity} color='blue' units="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Tempurature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}
 
function mapStateToProps({ weather }){
	return { weather }
}

export default connect(mapStateToProps)(WeatherList);




