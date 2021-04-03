import React , { useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Filter from '../Components/Filter.js'
import Programs from '../Components/Programs.js'
import { Col,Row } from 'react-bootstrap'
import { listProducts } from '../Actions/productActions.js'
import Loader from '../Components/Loader.js'
const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList=useSelector(state=>state.productList)
    const { loading,error,products } = productList
    useEffect(() => {
        dispatch(listProducts('https://api.spacexdata.com/v3/launches?limit=100'))
    },[dispatch])
    return (
        <>
        <Row className='homescreen'>
            <Col sm={12} lg={2}>
                <Filter/>
            </Col>

            <Col sm={12} lg={10}>
                {
                loading?<Loader/> :
                <Programs products={products}/>
                }
            </Col>
        </Row>  
        </>
    )
}

export default HomeScreen
