// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import ProductScreen from './ProductScreen'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { listProduct } from '../action/productAction'

const HomeScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProduct)
    }, [])
    const Products = []
    return (
        <>
            <h1>Trends</h1>
            <Row>
                {
                    Products.map((product, i) => (
                        <Col key={i}>
                            <ProductScreen product={product} />
                        </Col>)
                    )
                }
            </Row>
        </>
    )
}
export default HomeScreen