import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-dark" variant='dark' collapseOnSelect >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Online Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" >
                            <LinkContainer to={"/cart/"}>
                                <Nav.Link active><i className='fas fa-shopping-cart mx-2'></i>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signin">
                                <Nav.Link active> <i className="fas fa-user mx-2"></i>sign in</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header
