import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../action/cartAction"
import { useLocation, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Message from "../components/shared/Message"
import {
    Row,
    Col,
    Form,
    Button,
    Card,
    Image,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap"

const CartSc = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const location = useLocation()
    const qty = location.search ? Number(location.search.split("=")[1]) : 1
    // console.log(qty);
    useEffect(() => {
        dispatch(addToCart(id, 3))
    }, [dispatch, id, qty])

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    // console.log(cartItems)
    return (
        <>
            <h1>my cart</h1>
            {/* <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <Message>
                            Your Cart is Empty !<Link to="/">Go Back</Link>
                        </Message>
                    ) : (
                        <ListGroup variant="flush">
                            {cartItems.map((item) => (
                                <ListGroupItem>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>${item.price}</Col>
                                        <Col md={2}>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )
                                                }
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                            <Button
                                                type="button"
                                                variant="light"
                                            >
                                                <i
                                                    className="fa fa-trash text-danger"
                                                    aria-hidden="true"
                                                ></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    )}
                </Col>
            </Row> */}
        </>
    )
}

export default CartSc