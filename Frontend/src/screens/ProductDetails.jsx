import { Col, ListGroup, ListGroupItem, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Rating from "./Rating";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { listDetailProduct, productResetDetails } from "../action/productAction";
import Loading from "../components/shared/Loading";

const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, product } = productDetails

    useEffect(() => {
        dispatch(listDetailProduct(id))
    }, [dispatch, id])

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };
    const resetProductHandler=()=>{
        console.log('ddd');
        dispatch(productResetDetails())
    }
    // const products = Products.find((p)=>p._id===match.params.id) uska wala
    // const product = Products.find((p) => p._id === id)
    return (
        <>
            {
                (!loading) ? (
                    <div>
                        <Link to="/" className="btn btn-light my-2" onClick={resetProductHandler}>
                            <i className="fas fa-arrow-left"></i> Go Back
                        </Link>

                        <Row>

                            <Col md={6}>
                                <img src={product.image} alt={product.name} className="img-fluid object-fit-cover border rounded" />
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
                                        <Col className="text-end"> Status:</Col>
                                        <Col className="text-start">{product.countInStock > 0 ? 'in stock' : 'out of stock'}</Col>
                                    </Row>
                                </ListGroupItem>
                                {product.countInStock > 0 && (
                                    <ListGroupItem>
                                        <Row className="my-3" >
                                            <Col className="my-2 pdetailsDropdown">Qty</Col>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                    <option className="" key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Row>
                                    </ListGroupItem>
                                )}
                                <br /><br /><br />
                                <ListGroupItem className="text-center">
                                    <Button type="button" onClick={addToCartHandler}>add to cart</Button>
                                </ListGroupItem>
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <Loading />
                )
            }
        </>
    )
}
export default ProductDetails