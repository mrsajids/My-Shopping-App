import React, { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/shared/Message"
import Loading from "../components/shared/Loading"
import { login } from "../action/userAction"
import FromContainer from "../components/shared/FromContainer"
import { toast } from 'react-toastify';

const LoginScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)

    const redirect = location.search ? location.search.split("=")[1] : "/"
    const { loading, error, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            notify()
            setTimeout(() => navigate(redirect), 1000)
        }
    }, [navigate,userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        //dispatch
        dispatch(login(email, password))
    }
    const notify = () => toast.success("Login Success!")

    return (
        <>
            <FromContainer>
                <h1>SIGN IN</h1>
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="email" className="my-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="password" className="my-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type="submit" varient="primary" className="m-3">
                        SING IN
                    </Button>

                </Form>
                <Row>
                    <Col>
                        New Customer ?
                        <Link to={"/register"} style={{ "textDecoration": "none" }}>
                            &nbsp; Register
                        </Link>
                    </Col>
                </Row>
            </FromContainer>
        </>
    )
}

export default LoginScreen