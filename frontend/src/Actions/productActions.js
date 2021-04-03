import {  PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS } from '../Constants/productConstants'
import axios from 'axios'

export const listProducts=(path)=>async(dispatch)=>{
    try{
        
        dispatch({ type:PRODUCT_LIST_REQUEST })
        // const {data} = await axios.get('https://api.spacexdata.com/v3/launches?limit=100')
        const {data} = await axios.get(path)
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message:error.message
        })
    }
}
