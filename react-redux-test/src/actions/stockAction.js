import axios from "axios";

export const stockSymbol = ()=>{
    return { type: "EDITING" };
};

//Call to server

export const getNewStock = (stockSymbol)=>{
    return dispatch =>{
        
        axios
            .get(`https://financialmodelingprep.com/api/v3/company/profile/${stockSymbol}`)
            .then(res =>{
                dispatch ({ type: "New_Stock", payload: res.data });
            })
            .catch(err =>{
                dispatch ({ type: "NO_STOCK_FOUND", payload: })
            })
    }
}