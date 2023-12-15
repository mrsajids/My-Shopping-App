import products from '../products'
import { Row, Col } from 'react-bootstrap'
import ProductScreen from './ProductScreen'
const HomeScreen = () => {
    return (
        <>
            <h1>Trends</h1>
            <Row>
                {
                    products.map((product) => (
                    <Col key={product._id}>
                        <ProductScreen product={product}/>
                    </Col>)
                    )
                }
            </Row>
        </>
    )
}
export default HomeScreen