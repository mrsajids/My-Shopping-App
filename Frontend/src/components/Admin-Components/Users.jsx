import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, fetchUser } from '../../action/admin-action/adminUserAction'
import { useNavigate } from 'react-router-dom'
import Message from "../../components/shared/Message";

import { Form, Button, Row, Col, Table } from "react-bootstrap";

import { toast } from 'react-toastify';
import { getUserDetails, updateUserProfile } from '../../action/userAction';
const Users = () => {
    const dispatch = useDispatch()
    const { user, loading, error } = useSelector(state => state.allUsers)
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const [message, setMessage] = useState("");
    const [id,setId]=useState(null)

    useEffect(() => {
        dispatch(fetchUser())
        document.getElementsByTagName("form")[0].style.display='none'
    }, [dispatch])

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id))
            toast.error("User Deleted Successfully!")
            dispatch(fetchUser())
        }
    }
    const handleEdit = (data) => {
        document.getElementsByTagName("table")[0].style.display='none'
        document.getElementsByTagName("form")[0].style.display='block'
        setName(data.name)
       setEmail(data.email)
       setId(data._id)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          setMessage("Passwords do not match");
        }
        else {
          dispatch(updateUserProfile({ id, name, email, password }))
          dispatch(getUserDetails('profile'))
          // dispatch(login()) 
          toast.success("Updated Successfully!")
          navigate("/")
        }
      }

    return (
        <>
         {message && <Message variant="danger">{message}</Message>}
            <h3>All Users</h3>
            <Row>
                <Col><h6>Total Users {user.length}</h6></Col>
                <Col className='text-end my-3'><Button onClick={() => navigate('/register')}>ADD NEW USER</Button></Col>
            </Row>
            <Row>
                <Col>
                    {
                        loading ? "loading" : error ? "error" : (
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr className='text-center'>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>MAIL</th>
                                        <th>ADMIN</th>
                                        <th>ADD</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((data, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{data._id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td className='text-center'>{data.isAdmin ? "yes" : "no"}</td>
                                                <td className='text-center' onClick={() => handleEdit(data)}><i className="fas fa-edit cursor" ></i></td>
                                                <td className='text-center' onClick={() => handleDelete(data._id)}><i className="fas fa-trash cursor"></i></td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </Table>
                        )
                    }
                </Col>

            </Row>
            <Row>
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
                            disabled
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
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Re-enter password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Button type="submit" varient="primary" className="m-3">
                        Update
                    </Button>
                </Form>
            </Row>

        </>

    )
}
export default Users