import { Col, ListGroup, ListGroupItem, Row, Button } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import Rating from "./Rating";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { listDetailProduct } from "../action/productAction";

const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { product } = productDetails
    useEffect(() => {
        dispatch(listDetailProduct(id))
    }, [dispatch, id])
    // const products = Products.find((p)=>p._id===match.params.id) uska wala
    // const product = Products.find((p) => p._id === id)
    return (
        <>
            <Link to="/" className="btn btn-light">
                <i className="fas fa-arrow-left"></i> Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <img src={product.image} alt={product.name} className="prodImg" />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} Reviews`} />
                        </ListGroupItem>

                        <ListGroupItem>
                            Price : ${product.price}
                        </ListGroupItem>

                        <ListGroupItem>
                            {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroupItem>
                        <Row>
                            <Col> Status:</Col>
                            <Col>{product.countInStock > 0 ? 'in stock' : 'out of stock'}</Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button>add to cart</Button>
                    </ListGroupItem>
                </Col>
            </Row>
        </>
    )
}
export default ProductDetails