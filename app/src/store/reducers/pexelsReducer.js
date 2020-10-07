const initialState = {
    isImageLoading:false,
    cityImage:"",
    altImageInfo:"",
}


export const pexelsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_PEXEL_IMAGE_START":
            return {
                ...state,
                isImageLoading: true
            }
        case "FETCH_PEXEL_IMAGE_SUCCESS" :
            return {
                ...state,
                isImageLoading:false,
                cityImage:action.payload.largeImageURL,
                altImageInfo:action.payload.tags,
            }
        case "FETCH_PEXEL_IMAGE_FAIL": 
            return {
                ...state,
                isImageLoading:false,
                cityImage: `https://pixabay.com/get/53e3d1424a51b108f5d084609629337d1238dee55b4c704c7d2779d29e4ec051_1280.jpg`
            }
        default:
            return state
    }
}