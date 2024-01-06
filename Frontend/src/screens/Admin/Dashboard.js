import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Users from '../../components/Admin-Components/Users'
import Orders from '../../components/Admin-Components/Orders'
import Products from '../../components/Admin-Components/Products'
const Dashboard = () => {
    const navigate=useNavigate()
    return (
        <div>
            <Container>
                <h1>Dashboard</h1><hr />
                <Row>
                    <Col md={2}>
                        <ButtonGroup vertical>
                            <Button variant="outline-primary" onClick={()=>navigate('orders')}>Orders</Button>
                            <Button variant="outline-primary" onClick={()=>navigate('users')} >Users</Button>
                            <Button variant="outline-primary" onClick={()=>navigate('products')}>Products</Button>
                        </ButtonGroup>
                    </Col>
                    <Col md={10}>
                        <Routes>
                            <Route path="/orders" Component={Orders} />
                            <Route path="/users" Component={Users} /> 
                            <Route path="/products" Component={Products} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Dashboard