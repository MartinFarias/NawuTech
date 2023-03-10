import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  '../NavBar/NavBar.css';
import  CartWidget from '../../Components/CartWidget/CartWidget.js';

function ColorSchemesExample() {
  return (
    <>


      <Navbar bg="primary" variant="dark">
      <img src={require('../../Assets/Logo.png')} 

className="d-inline-block align-top logo"
alt="logo de dips"/>


        <Container className='barra'>
                  <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Ofertas</Nav.Link>
            <Nav.Link href="#features">catalogo</Nav.Link>
            <Nav.Link href="#pricing">contacto</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
