import axios from 'axios';

export const fetchQuote = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_QUOTE_START' });
    axios
      .get('https://jack-donaghy-quotes.herokuapp.com/quotes')
      .then(res => {
        // res.data.quote
        dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.quote });
      })
      .catch(err => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: 'FETCH_QUOTE_FAILURE',
          payload: `Error ${err.response.status}: ${err.response.data}`
        });
      });
  };
};
