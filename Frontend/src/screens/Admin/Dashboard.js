import { Col, Container, Row } from 'react-bootstrap'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Users from '../../components/Admin-Components/Users'
import Orders from '../../components/Admin-Components/Orders'
import Products from '../../components/Admin-Components/Products'
import ProductAdd from '../../components/Admin-Components/ProductAdd'
import ProductEdit from '../../components/Admin-Components/ProductEdit'
import Card from 'react-bootstrap/Card'
import orderimg from '../../orderbar.png'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) {
            navigate("/login");
        }
    }, [userInfo, navigate])

    return (
        <div>
            <Container>
                <h1>Dashboard</h1>
                <Row clan="true">
                <Card className='adminCard m-2' style={{ width: '18rem' }} onClick={() => navigate('orders')}>
                    <Card.Body>
                        <Row>
                        <Col>
                            <Card.Text>
                                Orders
                            </Card.Text>
                            <Card.Title>8</Card.Title>
                        </Col>
                        <Col><Card.Img variant="top" src={orderimg} alt='img' /></Col>
                    </Row>
                    </Card.Body>
                </Card>

                <Card className='adminCard adminCard m-2' style={{ width: '18rem' }} onClick={() => navigate('users')}>
                    <Card.Body>
                        <Row>
                        <Col>
                            <Card.Text>
                                Users
                            </Card.Text>
                            <Card.Title>8</Card.Title>
                        </Col>
                        <Col><Card.Img variant="top" src='https://iconape.com/wp-content/png_logo_vector/users.png' alt='img' /></Col>
                    </Row>
                    </Card.Body>
                </Card>

                <Card className='adminCard m-2' style={{ width: '18rem' }} onClick={() => navigate('products')}>
                    <Card.Body>
                        <Row>
                        <Col>
                            <Card.Text>
                                Products
                            </Card.Text>
                            <Card.Title>8</Card.Title>
                        </Col>
                        <Col><Card.Img variant="top" src='https://www.freeiconspng.com/uploads/production-icon-26.jpg' alt='img' /></Col>
                    </Row>
                    </Card.Body>
                </Card>
                </Row>
                <Row>
                    <Col md={11}>
                        <Routes>
                            <Route path="/" Component={Orders} />
                            <Route path="/orders" Component={Orders} />
                            <Route path="/users" Component={Users} />
                            <Route path="/products" Component={Products} />
                            <Route path="/products/addproduct" Component={ProductAdd} />
                            <Route path="/products/editproduct/:id" Component={ProductEdit} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Dashboard