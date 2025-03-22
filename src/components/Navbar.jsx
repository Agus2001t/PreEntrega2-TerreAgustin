import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBarComponent() {
    return (
        <Navbar className='navBarColor' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'><img className='logo' src="../public/logo.webp" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Catálogo" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/category/Cocina">Cocina</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/Dormitorio">
                                Dormitorio
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/Living">Living</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/Jardin">
                                Jardín
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/Otros">Otros</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
                        <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;