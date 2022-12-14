import { Component } from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
class Navbar1 extends Component {
    render() {
        let names = ["JS", "React", "Node", 'Angular']

        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">StudentPortal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/students">
                                    Students
                                </Nav.Link>
                                <Nav.Link href="/students/add">
                                    Add a Student
                                </Nav.Link>
                                <NavDropdown title="Courses" id="basic-nav-dropdown">
                                    {names.map((n1) => (
                                        <NavDropdown.Item key={n1} href={`/students/course/${n1}`}>{n1}</NavDropdown.Item>

                                    ))}
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Navbar1
