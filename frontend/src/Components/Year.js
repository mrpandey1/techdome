import React  from 'react'
import { useDispatch } from 'react-redux'
import { listProducts } from '../Actions/productActions.js'
import { Button } from 'react-bootstrap'
const Year = ({key,children}) => {

    const dispatch = useDispatch()

    const clickHandler = event => {
      event.preventDefault()
      if(children==='All.'){
        dispatch(listProducts(`https://api.spacexdata.com/v3/launches?limit=100`))
      }else{
        dispatch(listProducts(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${children}`))
      }
    }

    return (
         <Button onClick={clickHandler} style={{margin:'5px 10px',padding:'5px 15px'}} variant="success">{children}</Button>
        // <button onClick={clickHandler} className="yearButton">
        //     {children}
        // </button>

    )


}
export default Year
