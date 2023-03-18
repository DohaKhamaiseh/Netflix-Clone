import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return(
        <>
            {/* <nav> <Link to="/">Home</Link>
                <Link to="/favlist">FavList</Link>
            </nav> */}

            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favlist">FavList</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default NavBar;