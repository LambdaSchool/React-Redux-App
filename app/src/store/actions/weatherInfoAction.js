import Axios from "axios";

export const FETCH_WEATHER_DATA_START = "FETCH_WEATHER_DATA";
export const FETCH_WEATHER_DATA_FAILED = "FETCH_WEATHER_DATA_FAILED";
export const FETCH_WEATHER_SUCESS = "FETCH_WEATHER_SUCESS"

export const fetchWeatherData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_WEATHER_DATA_START });
    Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?appid=f9039d5e70b79bc54e8913e14e31a84f&q=new%20york%20city&units=imperial`
    )
      .then((res) => {
        dispatch({type: FETCH_WEATHER_SUCESS, payload: res.data} )})
      .catch((err) => {
        dispatch({type:FETCH_WEATHER_DATA_FAILED, payload:`${err.message}`})
      });
  };
};
