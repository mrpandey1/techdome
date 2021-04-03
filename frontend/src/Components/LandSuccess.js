import React from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { listProducts } from '../Actions/productActions.js'
const LandSuccess = () => {
        
    const dispatch = useDispatch()

    const trueclickHandler = event => {
        event.preventDefault()
  
        dispatch(listProducts('https://api.spacexdata.com/v3/launches?limit=100&land_success=true'))
      }
      const falseclickHandler = event => {
        event.preventDefault()
  
        dispatch(listProducts('https://api.spacexdata.com/v3/launches?limit=100&land_success=false'))
      }
    return (
        <div>
        <Row>
            <Col>
            Successful Landing
            </Col>
        </Row>
        <Row>
            <Col  sm={6} xl={6} lg={6} md={6} xs={6}>
             <Button onClick={trueclickHandler} style={{margin:'4% 0%',padding:'5px 10px'}} variant="success">true</Button>
            </Col>
            <Col sm={6} xl={6} lg={6} md={6} xs={6}>
            <Button onClick={falseclickHandler} style={{margin:'4% 0%',padding:'5px 10px'}} variant="success">false</Button>
            </Col>
        </Row>
        </div>
    )
}

export default LandSuccess
