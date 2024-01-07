import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loading from "../components/shared/Loading";
import { register } from "../action/userAction";
import FormContainer from "../components/shared/FromContainer";
import { toast } from 'react-toastify';

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation()
  const navigate = useNavigate()

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userLogin.userInfo.isAdmin===false) {
      navigate('/')
    }
    if (userInfo) {
      toast.success("Registered Successfully! Please Sign-in")
      setTimeout(() => navigate('/login'), 1000);
    }
  }, [navigate, userInfo, userLogin.userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    if (password !== confirmPassword) {
      setMessage("Password do not macth");
    } else {
      dispatch(register(name, email, password));
    }
  };



  return (
    <>
      <FormContainer>
        <h1>Register</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loading />}
        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className="my-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email" className="my-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password" className="my-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword" className="my-6">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-Enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" varient="primary" className="my-3">
            Register
          </Button>
        </Form>
        <Row>
          <Col>
            Have an account !
            <Link to={"/login"} style={{ "textDecoration": "none" }}>
              &nbsp; Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;