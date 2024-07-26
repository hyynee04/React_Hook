import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const account = useSelector(state => state.user.account);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="/">ReactJS</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'>ReactJS</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/user" className='nav-link'>User</NavLink>
                        <NavLink to="/admin" className='nav-link'>Admin</NavLink>
                    </Nav>
                    <Nav>
                        {!isAuthenticated ?
                            <>
                                <button
                                    className='btn-login'
                                    onClick={() => handleLogin()}
                                >Log in</button>
                                <button
                                    className='btn-signup'
                                    onClick={() => navigate('/register')}
                                >Sign up</button>
                            </>
                            :
                            <NavDropdown title="Setting" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;