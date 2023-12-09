import products from '../products'
import {Row,Col} from 'react-bootstrap'
const HomeScreen = () => {
    return (
        <>
            <Row>
                <Col md={5}>
                    {
                        products.map((element) => {
                            return <>{element.name}
                            </>
                        })
                    }
                </Col>
            </Row>

        </>
    )
}
export default HomeScreen