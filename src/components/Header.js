import {Navbar,Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../css/index.css'

export const Header = () => {
    return <Navbar bg="light" expand="lg">
      <Link className='link'  to='/'><Navbar.Brand className="m-3 fs-2"> Blog Space</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link  to='/Form'>
        <Nav.Link href="#link"> Form</Nav.Link>
</Link>
      </Nav>

    </Navbar.Collapse>
 
  </Navbar>
}