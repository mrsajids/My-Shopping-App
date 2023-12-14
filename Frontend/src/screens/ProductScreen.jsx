import { Card } from "react-bootstrap"
import Rating from "./Rating"
const ProductScreen = ({ product }) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="Cards m-2">
                <a href={`/product/${product._id}`}>
                    <Card.Img variant="top" src={product.image} />
                </a>
                <Card.Body className="text-center">
                    <a href={`/product/${product._id}`}>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            <Rating  value={product.rating} text={`${product.numReviews} reviews`} />
                    
                        </Card.Text >
                        <div>
                        &#x24; {product.price}
                        </div>
                    </a>               
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductScreen