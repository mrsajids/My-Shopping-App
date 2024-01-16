import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { Link } from "react-router-dom"

const ProductScreen = ({ product }) => {
    return (
        <>
            <Card style={{"width":"16rem"}} className="Cards mx-auto my-3">
                <Link to={`/product/${product._id}`}>
                    <Card.Img className="img-fluid" variant="top" src={product.image} />
                </Link>
                <Card.Body className="text-center mx-auto ">
                    <Link to={`/product/${product._id}`}>
                        <Card.Title className="cardTitle">{product.name}</Card.Title>
                        {/* <Card.Text>
                        </Card.Text> */}
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
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