import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
//css
import '../../styles/Nav.css';
import UserIcon from '../../assets/icon/user-icon.jpg';


const NavbarComp = () => {
    const [show, setShow] = useState(false);
    let navigate = useNavigate();

    let submitHandler = (e) => {
        e.preventDefault();
        let word = e.target.search.value;
        e.currentTarget.reset();
        navigate(`/search-results?search=${word}`);
    };

    return (
        <div>
            <Navbar style={{ backgroundColor: '#000' }} variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="todoflix" as={Link} to="/">
                        TODOFLIX
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="link" as={Link} to="/">
                                Inicio
                            </Nav.Link>
                            <NavDropdown
                                title="Categorias"
                                id="navbarScrollingDropdown"
                                show={show}
                                onMouseEnter={() => setShow(true)}
                                onMouseLeave={() => setShow(false)}
                            >
                                <NavDropdown.Item as={Link} to='/todos'>Todos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/favoritos'>Favoritos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/javistos'>Já vistos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/adicionados'>Adicionados</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button className='d-flex justify-content-center add-filme-button'>
                            Adicionar Filme
                        </Button>
                        <Form className="d-flex" onSubmit={submitHandler}>
                            <FormControl
                                type="text"
                                placeholder="Pesquisar"
                                className="search-input"
                                aria-label="Search"
                                name="search"
                            />
                            {/* <Button className="searchButton" type="submit">
                                Search
                            </Button> */}
                        </Form>
                        <NavDropdown title={<img src={UserIcon} alt='userIcon' />} id="navbarScrollingDropdown">
                            <NavDropdown.Item >Perfil</NavDropdown.Item>
                            <NavDropdown.Item >Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComp;