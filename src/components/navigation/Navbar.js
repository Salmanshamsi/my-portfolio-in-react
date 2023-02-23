import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import"./Navbar.css"


function ColorSchemesExample() {
  return (
      <>
    <Navbar bg="dark" variant="dark" className='navigate' >
        <Container>
          <Navbar.Brand href="/">salman shamsi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#expr">Expirence</Nav.Link>
            <Nav.Link href="#proj">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;


