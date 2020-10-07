const initialState = {
    isLoading:false,
    cityName:"",
    feels_like:"",
    highOf:"",
    lowOf:"",
    temperature:"",
    error:"",
}

export const weatherReducer = ( state =  initialState, action ) => {
    switch(action.type) {
        case "FETCH_WEATHER_DATA_START" :
            return {
                ...state,
                isLoading: true
            }
        case "FETCH_WEATHER_SUCESS":
            return {
                ...state,
                isLoading:false,
                cityName: action.payload.name,
                feels_like: action.payload.main.feels_like,
                highOf:action.payload.main.temp_max,
                lowOf:action.payload.main.temp_min,
                temperature:action.payload.main.temp
            }
        case "FETCH_WEATHER_DATA_FAILED":
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }
        default :
        return state
    }
}