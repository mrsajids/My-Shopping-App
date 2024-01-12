import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Users from '../../components/Admin-Components/Users'
import Orders from '../../components/Admin-Components/Orders'
import Products from '../../components/Admin-Components/Products'
import ProductAdd from '../../components/Admin-Components/ProductAdd'
import ProductEdit from '../../components/Admin-Components/ProductEdit'
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
    }, [userInfo,navigate])

    return (
        <div>
            <Container>
                <h1>Dashboard</h1>
                <hr />
                <Row>
                    <Col md={12}>
                        <ButtonGroup horizontal="true">
                            <Button variant="outline-primary" onClick={() => navigate('orders')}>Orders</Button>
                            <Button variant="outline-primary" onClick={() => navigate('users')} >Users</Button>
                            <Button variant="outline-primary" onClick={() => navigate('products')}>Products</Button>
                        </ButtonGroup>
                    </Col>
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