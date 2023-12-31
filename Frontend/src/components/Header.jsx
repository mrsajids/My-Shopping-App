import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../action/userAction'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate()
    const userLogin = useSelector((state) => state.userLogin);
    const userDetails=useSelector(state=>state.userDetails)
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
            dispatch(logout());
            toast.error("Loged Out!")
            navigate("/login")
    };
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

                            {userInfo ? (
                                <NavDropdown title={userDetails.user.name||userInfo.name}>
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <i className="fas fa-user"></i>
                                        &nbsp; singin
                                    </Nav.Link>
                                </LinkContainer>
                            )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer />
        </>
    )
}
export default Header
