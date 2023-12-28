import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetails, updateUserProfile } from "../action/userAction";
// import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import Message from "../components/shared/Message";
import Loading from "../components/shared/Loading";
import { toast } from 'react-toastify';


const ProfileDetail = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  // // const { success } = userUpdateProfile;

  useEffect(() => {
    //if not login
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [userInfo, user, dispatch, navigate]);


  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    }
    else {
     dispatch(updateUserProfile({ id: user._id, name, email, password }))
      dispatch(getUserDetails('profile'))
      // dispatch(login()) 
      toast.success("Updated Successfully!")
      navigate("/")
    }
  }

  return (
    <>
      <Row>
        <Col md={3}>
          <h1>Update Information</h1>
          {error && <Message varient="danger">{error}</Message>}
          {loading && <Loading />}
          {message && <Message variant="danger">{message}</Message>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>COnfirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" varient="primary">
              Update
            </Button>
          </Form>
        </Col>

      </Row>
    </>
  )
}
export default ProfileDetail