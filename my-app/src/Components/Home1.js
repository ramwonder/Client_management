
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import './Home.css';
import logo from './behance.png';
import login from './login.png';
function CollapsibleExample1() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav'>
      <Container>
      <img src={logo}  className='logo' />  
        <Navbar.Brand href="#home">  Client Management Sytem</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dash">Home</Nav.Link>
          
            <NavDropdown title="Action" id="collasible-nav-dropdown">
           
              <NavDropdown.Item href="/client">
                Client
              </NavDropdown.Item>
              <NavDropdown.Item href="/project">Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/AllProjectTeamdetails">
                Project Team
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="/">
              <img src={login} className="icon" />
              Logout
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample1;