import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavComponent () {
  return (
    <Navbar expand="lg" className="body-tertiary" style={{backgroundColor:'lightgreen'}}>
      <Container>
        <Navbar.Brand href="#home">EasyCart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Cart</Nav.Link>
            <Nav.Link href="#link">wishlist</Nav.Link>
            <NavDropdown title="Register" id="basic-nav-dropdown">
              {/* <Link to={'/login'}> */}
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              {/* </Link> */}
              <NavDropdown.Item href="#action/3.2">SignUp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;