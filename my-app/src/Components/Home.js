
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import './Home.css';
import logo from './behance.png';
import login from './login.png';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav'>
      <Container>
      <img src={logo}  className='logo' />  
        <Navbar.Brand href="home">  Client Management Sytem</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          
            
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="login">
              <img src={login} className="icon" />
              Login
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;