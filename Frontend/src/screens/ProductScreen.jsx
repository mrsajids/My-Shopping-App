import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { Link } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'

const ProductScreen = ({ product }) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="Cards m-2">
                <Link to={`/product/${product._id}`}>
                    <Card.Img variant="top" src={product.image} />
                </Link>
                <Card.Body className="text-center">
                    <LinkContainer to={`/product/${product._id}`}>
                        <Card.Title>{product.name}</Card.Title>
                        </LinkContainer>   
                        <Card.Text>
                            <Rating  value={product.rating} text={`${product.numReviews} reviews`} />
                        </Card.Text>
                        <div>
                        &#x24; {product.price}
                        </div>
                                
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductScreen