import Axios from "axios";

export const FETCH_PEXEL_IMAGE_START = "FETCH_PEXEL_IMAGE_START";
export const FETCH_PEXEL_IMAGE_FAIL = "FETCH_PEXEL_IMAGE_FAIL";
export const FETCH_PEXEL_IMAGE_SUCCESS = "FETCH_PEXEL_IMAGE_SUCCESS"

export const fetchPexelImage = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_PEXEL_IMAGE_START });
      Axios.get(
        `https://pixabay.com/api/?key=14377008-6a15e1087d3bad2acb1cd8486&q=manhattan&image_type=photo`
      )
        .then((res) => {
          //Returns Random Image from arry
          const data = res.data.hits
          const randomImage = data[Math.floor(Math.random()*data.length)]
          //Returns Random Image from array
          dispatch({type: FETCH_PEXEL_IMAGE_SUCCESS, payload: randomImage} )})
        .catch((err) => {
          dispatch({type:FETCH_PEXEL_IMAGE_FAIL})
        });
    };
  };
