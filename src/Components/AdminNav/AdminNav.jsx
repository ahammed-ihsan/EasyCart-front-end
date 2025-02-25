import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AdminNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">EasyCart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/admin/productmanagement">Product Management</Nav.Link>
            <Nav.Link href="#pricing">User Management</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNav;