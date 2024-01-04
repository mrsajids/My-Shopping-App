import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../action/cartAction"
import { removeFromCart } from "../action/cartAction"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Message from "../components/shared/Message"
import {
    Row,
    Col,
    Card,
    Form,
    Button,
    Image,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap"

const CartSc = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const qty = location.search ? Number(location.search.split("=")[1]) : 1

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkout = () => {
        navigate('/shipping')
    }
    return (
        <>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <Message>
                            Your Cart is Empty !
                            <br />
                            <Link to="/">Go Back</Link>
                        </Message>
                    ) : (
                        <ListGroup variant="flush" className="CartList">
                            {cartItems.map((item, i) => (
                                <ListGroupItem key={i}>
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
                                                {
                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                            <Button
                                                type="button"
                                                variant="light"
                                                onClick={() => removeFromCartHandler(item.product)}
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
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h2>
                                    subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                                    ) items
                                </h2>
                                $
                                {cartItems
                                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                                    .toFixed(2)}
                            </ListGroupItem>
                            <Button
                                type="button"
                                className="btn-block"
                                disabled={cartItems.length === 0}
                                onClick={checkout}
                            >
                                Proceed to checkOut
                            </Button>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default CartSc