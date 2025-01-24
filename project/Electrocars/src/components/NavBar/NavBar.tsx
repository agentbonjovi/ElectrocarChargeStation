import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { FC } from 'react';

const Navigation: FC = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="./" className="d-flex align-items-center">
          <img id="logo-img"
            src="/logo.png"
            alt="Logo"
            className="d-inline-block align-top"
          />
          <span className="ms-2">Зарядные станции электромобилей</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/stations">Зарядные станции</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;