import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-dark" variant='dark' collapseOnSelect >
                <Container>
                    <Navbar.Brand href="#home">online shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" >
                            <Nav.Link href="/"><i className='fas fa-shopping-cart mx-2'></i>Cart</Nav.Link>
                            <Nav.Link href="/"> <i className="fas fa-user mx-2"></i>sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header
