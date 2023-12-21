// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import ProductScreen from './ProductScreen'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../action/productAction'

const HomeScreen = () => {
    const productList = useSelector(state=>state.productList)
    const {loading,error,product}=productList
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProduct)
    }, [])
    const Products = []
    return (
        <>
            <h1>Trends</h1>
            {
                loading?<h1>Loading..</h1>:  error?{error}:
                <Row>
                {
                    product.map((product, i) => (
                        <Col key={i}>
                            <ProductScreen product={product} />
                        </Col>)
                    )
                }
            </Row>
            }
            
            
        </>
    )
}
export default HomeScreen