import getNewStock from "../actions/stockAction";

const initialState ={
    editing: false,
    loading: false, 
    Stock_Name: Apple,
    
}

export const stockReducer = (state = initialState, action) =>{
    switch(action.type){
        case "EDITING":
            return{...state, editing: true };
        case "DONE_EDITING":
            return{...state, editing: false };
        case "LOADING":
            return{...state, loading: true };
        case "NEW_STOCK":
            return{...state, loading: false, stock: action.payload }
    }

}
