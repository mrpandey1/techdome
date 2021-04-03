import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from './Message'
const Programs = ({products}) => {
    return (
        <div>
        <Row className='program'>
                 {products && products.length>0? products.map((product)=>(
                    <Col sm={12} md={6} lg={3} key={product._id} xl={3} >
                        <Product 
                        productName={product.rocket.rocket_name} 
                        productImage={product.links.mission_patch_small}
                        launchYear={product.launch_year}
                        successfulLaunch={product.launch_success}
                        landSuccess={product.rocket.first_stage.cores[0].land_success}
                        />
                    </Col>
                )):'No programs in this year'}
            </Row>
        </div>
    )
}

export default Programs
