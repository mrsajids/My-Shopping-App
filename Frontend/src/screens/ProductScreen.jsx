import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { Link } from "react-router-dom"

const ProductScreen = ({ product }) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="Cards m-2">
                <Link to={`/product/${product._id}`}>
                    <Card.Img variant="top" src={product.image} />
                </Link>
                <Card.Body className="text-center">
                    <Link to={`/product/${product._id}`}>
                        <Card.Title>{product.name}</Card.Title>
                        {/* <Card.Text>
                        </Card.Text> */}
                            <Rating  value={product.rating} text={`${product.numReviews} reviews`} />
                        <div>
                        &#x24; {product.price}
                        </div>
                    </Link>               
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductScreen