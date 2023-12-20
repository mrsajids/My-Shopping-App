// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import ProductScreen from './ProductScreen'
import { useEffect, useState } from 'react'
import axios from 'axios'

const HomeScreen = () => {
    const [Products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProd= async ()=>{
            const {data} = await axios.get('products/')
           setProducts(data)
        }
        fetchProd()
    },[])

    return (
        <>
            <h1>Trends</h1>
            <Row>
                {
                    Products.map((product,i) => (
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