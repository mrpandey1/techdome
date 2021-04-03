import React from 'react'
import { Row,Col,} from 'react-bootstrap'
import LandSuccess from './LandSuccess'
import LaunchStart from './LaunchStart'
import Year from './Year'
const Filter = () => {
    return (
        <div className='filter'>
        <Row>
            <Col sm={12}>
            <span style={{fontWeight:'bolder'}}>
                Filters
            </span>
            </Col>
        </Row>
        <Row>
            <Col>
                Launch Year
            </Col>
        </Row>
        <Row>
                {
                    [...Array(15).keys()].map((x)=>(
                    <Col sm={6} xl={6} lg={6} md={6} xs={6}>
                        <Year key={2006+x}>{2006+x}</Year>
                    </Col>
                ))
            }
            <Col sm={6} xl={6} lg={6} md={6} xs={6}>
                <Year>
                    All.
                </Year>    
            </Col>
            </Row> 
            <LaunchStart/>
            <LandSuccess/>
                
        </div>
    )
}

export default Filter
