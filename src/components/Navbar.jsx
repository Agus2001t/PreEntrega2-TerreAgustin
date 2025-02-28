import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBarComponent() {
    return (
        <Navbar className='navBarColor' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className='logo' src="../public/logo.webp" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Catálogo" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cocina</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Dormitorio
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Living</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Jardín
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#actiob/3.5">Otros</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Ofertas</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;