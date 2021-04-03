import React from 'react'
import {Card} from 'react-bootstrap'
const Product = ({productName,productImage,launchYear,successfulLaunch,landSuccess}) => {
    return (
        <Card className='mb-3 p-3 rounded' >
            <Card.Img variant="top" src={productImage} />
                <Card.Body>
                        <strong>
                            <h3 className='programName'>{productName}</h3>
                        </strong>
                        <i>
                            Mission Ids:
                        </i>
                        <p>
                            - list of mission ids
                        </p>
                        <p>
                            <i>
                            Launch Year : 
                            </i>
                            {launchYear}
                        </p>
                        <p>
                            <i>
                                Successful Launch :
                            </i>
                            {successfulLaunch ? ' true':' false'}
                        </p>
                        <p>
                            <i>
                                Successful Landing :
                            </i>
                            {landSuccess ?' true':' false'}
                        </p>
                </Card.Body> 
        </Card>
    )
}

export default Product
