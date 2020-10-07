import { combineReducers } from 'redux'
import { pexelsReducer } from './pexelsReducer'
import { weatherReducer } from './weatherReducer'
import { formReducer } from './formReducer'

export default combineReducers({pexelsReducer, weatherReducer, formReducer})