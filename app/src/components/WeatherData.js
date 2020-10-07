import React, { useEffect } from "react";
import { Item, Dimmer, Loader, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchWeatherData } from '../store/actions/weatherInfoAction'

function WeatherData(props) {
  useEffect(() => {
    props.fetchWeatherData();
  }, []);

  return (
    <>
      {props.isLoading ? (
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      ) : (
        <Container style={{ marginTop: "25px", width: "50%" }}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header>{props.cityName}</Item.Header>
                <Item.Meta>
                  Local Temperature: {Math.floor(props.temperature)}°
                </Item.Meta>
                <Item.Extra>
                  Feels Like: {Math.floor(props.feels_like)}
                </Item.Extra>
                <Item.Extra>
                  High of: {Math.floor(props.highOf)}°
                </Item.Extra>
                <Item.Extra>
                  Low of: {Math.floor(props.lowOf)}°
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cityName: state.weatherReducer.cityName,
    temperature: state.weatherReducer.temperature,
    feels_like: state.weatherReducer.feels_like,
    lowOf: state.weatherReducer.lowOf,
    highOf: state.weatherReducer.highOf,
    description: state.weatherReducer.description,
    isLoading: state.weatherReducer.isLoading,
  };
};

export default connect(mapStateToProps, { fetchWeatherData })(WeatherData);