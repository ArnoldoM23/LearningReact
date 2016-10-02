 // actions go to the reducers

// axios is to make ajax request kinda like jquery
import axios from 'axios';

const API_KEY = 'c90e56942fd06d11d618a287c0bde61b';
const  ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}