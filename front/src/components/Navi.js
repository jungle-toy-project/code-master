import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navi({ login }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">코드마스터</Navbar.Brand>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            {login ? (
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="#home">Login</Nav.Link>
            )}
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Navi;
