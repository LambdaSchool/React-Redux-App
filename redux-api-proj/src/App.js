import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStockInfo } from "./actions/actions";
import SearchForm from "./components/SearchForm";
import "./App.css";

function App(props) {
  const { fetchStockInfo } = props;
  const [url, setUrl] = useState(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&interval=5min&apikey=ZZERN3GSXZ5E1U0M`
  );
  useEffect(() => {
    fetchStockInfo(url);
  }, [fetchStockInfo, url]);
  return (
    <div className="App">
      <h1>Search Ticker:</h1>
      <SearchForm setUrl={setUrl} />
      <h2>Date: {props.date}</h2>
      <h3>Stock Closing Price:{props.stocks}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    stocks: state.stocks,
    date: state.date,
  };
};

export default connect(mapStateToProps, { fetchStockInfo })(App);
