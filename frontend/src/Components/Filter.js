import React from 'react'
import { Row,Col,} from 'react-bootstrap'
import LandSuccess from './LandSuccess'
import LaunchStart from './LaunchStart'
import Year from './Year'
const Filter = () => {
    return (
        <div className='filter'>
        <Row>
            <Col sm={12} style={{textAlign:'center'}}>
            <span style={{fontWeight:'bolder',color:'black'}}>
                Filters
            </span>
            <hr></hr>
            </Col>
        </Row>
        <Row>
            <Col style={{textAlign:'center',marginBottom:'2%'}}>
                Launch Year
            </Col>
        </Row>
        <Row>
                {
                    [...Array(15).keys()].map((x)=>(
                    <Col sm='3' xl='6' lg='6' md='3' xs='6' style={{textAlign:'center'}}>
                        <Year key={2006+x}>{2006+x}</Year>
                    </Col>
                ))
            }
            <Col sm={6} xl={6} lg={6} md={6} xs={6} style={{textAlign:'center'}}>
                <Year>
                    All..
                </Year>    
            </Col>
            </Row> 
            <LaunchStart/>
            <LandSuccess/>
                
        </div>
    )
}

export default Filter
