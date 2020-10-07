import Axios from "axios";
export const SEARCH_TERM = "SEARCH_TERM";
export const SEARCH_TERM_SUCESS = "SEARCH_TERM_SUCESS"

export const FETCH_PEXEL_IMAGE_START = "FETCH_PEXEL_IMAGE_START";
export const FETCH_PEXEL_IMAGE_FAIL = "FETCH_PEXEL_IMAGE_FAIL";
export const FETCH_PEXEL_IMAGE_SUCCESS = "FETCH_PEXEL_IMAGE_SUCCESS";

export const FETCH_WEATHER_DATA_START = "FETCH_WEATHER_DATA";
export const FETCH_WEATHER_DATA_FAILED = "FETCH_WEATHER_DATA_FAILED";
export const FETCH_WEATHER_SUCESS = "FETCH_WEATHER_SUCESS";

export const searchFeature = (searchTerm) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_TERM, payload: searchTerm });
    dispatch({ type: FETCH_PEXEL_IMAGE_START });
    dispatch({ type: FETCH_WEATHER_DATA_START });
    Axios.get(
      `https://pixabay.com/api/?key=14377008-6a15e1087d3bad2acb1cd8486&q=${searchTerm.cityName}&image_type=photo`
    )
      .then((res) => {
        //Returns Random Image from arry
        const data = res.data.hits;
        const randomImage = data[Math.floor(Math.random() * data.length)];
        //Returns Random Image from array
        dispatch({ type: FETCH_PEXEL_IMAGE_SUCCESS, payload: randomImage });
        dispatch({type: SEARCH_TERM_SUCESS})
      })
      .catch((err) => {
        dispatch({ type: FETCH_PEXEL_IMAGE_FAIL});
      });
    Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?appid=f9039d5e70b79bc54e8913e14e31a84f&q=${searchTerm.cityName}&units=imperial`
    )
      .then((res) => {
        dispatch({ type: FETCH_WEATHER_SUCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_WEATHER_DATA_FAILED,
          payload: `${err.message}`,
        });
      });
  };
};

// export const searchFeature = (searchTerm) => {
//   return (dispatch) => {
// dispatch({ type: FETCH_PEXEL_IMAGE_START });
//     dispatch({ type: FETCH_WEATHER_DATA_START });

// Axios.get(
//   `https://pixabay.com/api/?key=14377008-6a15e1087d3bad2acb1cd8486&q=${searchTerm}&image_type=photo`
// )
//   .then((res) => {
//     //Returns Random Image from arry
//     const data = res.data.hits;
//     const randomImage = data[Math.floor(Math.random() * data.length)];
//     //Returns Random Image from array
//     dispatch({ type: FETCH_PEXEL_IMAGE_SUCCESS, payload: randomImage });
//   })
//   .catch((err) => {
//     dispatch({ type: FETCH_PEXEL_IMAGE_FAIL, payload: `${err.data}` });
//   });
// Axios.get(
//   `http://api.openweathermap.org/data/2.5/weather?appid=f9039d5e70b79bc54e8913e14e31a84f&q=${searchTerm}&units=imperial`
// )
//   .then((res) => {
//     dispatch({ type: FETCH_WEATHER_SUCESS, payload: res.data });
//   })
//   .catch((err) => {
//     dispatch({
//       type: FETCH_WEATHER_DATA_FAILED,
//       payload: `${err.message}`,
//     });
//   });
//   };
// };
