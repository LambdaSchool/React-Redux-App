import React from 'react'
import { GET_QUOTE_START, GET_QUOTE_SUCCESS } from '../actions/actions'

const initialState = {
    en: "The amateur software engineer is always in search of magic, some sensational method or tool whose application promises to render software development trivial. It is the mark of the professional software engineer to know that no such panacea exist.",
    author: "Grady Booch",
    id: "5a96b909d6959500047aecaf",
    isLoading: false,
    error: ''
}
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_QUOTE_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_QUOTE_SUCCESS:
            return {
                ...state,
                en: action.payload.en,
                author: action.payload.author,
                id: action.payload.id,
                isLoading: false,
                error: ''
            }
        default:
            return state
    }
}