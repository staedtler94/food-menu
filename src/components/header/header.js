import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {

  // get users after login
  var userName = () => {
    return "Test User";
  }

  var menuName = "Menu Scheduler"

  return (
    < Navbar >
      < Container >
        < Navbar.Brand href = "#home" > { menuName } < /Navbar.Brand>
        < Navbar.Toggle / >
        < Navbar.Collapse className = "justify-content-end" >
        < NavDropdown title = { userName() } id = "basic-nav-dropdown" >
          < NavDropdown.Item href = "#action/3.1" > Action < /NavDropdown.Item>
          < NavDropdown.Item href = "#action/3.2" > Another action </NavDropdown.Item>
          < NavDropdown.Item href = "#action/3.3 " > Something </ NavDropdown.Item>
          < NavDropdown.Divider / >
          < NavDropdown.Item href = "#logout"> LogOut </ NavDropdown.Item>
        </ NavDropdown>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  )
}
