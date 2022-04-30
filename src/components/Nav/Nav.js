import React, { useContext, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Modal, Container, NavDropdown, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MoviesContext } from '../../context/MoviesContext';
import AddMovie from '../AddMovie/Form'
//css
import '../../assets/styles/Nav.css';
import UserIcon from '../../assets/icon/user-icon.jpg';
import ButtonRed from '../../Global/styled/ButtonRed';

const NavbarComp = () => {
    const { showStatus, handleShow, handleClose } = useContext(MoviesContext);
    const [showCategory, setShowCategory] = useState(false);
    let navigate = useNavigate();

    let submitHandler = (e) => {
        e.preventDefault();
        let word = e.target.search.value;
        e.currentTarget.reset();
        navigate(`/search-results?search=${word}`); //  `search?query=${word}`
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
                                show={showCategory}
                                onMouseEnter={() => setShowCategory(true)}
                                onMouseLeave={() => setShowCategory(false)}
                            >
                                <NavDropdown.Item as={Link} to='/todos'>Todos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/favoritos'>Favoritos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/javistos'>Já vistos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/adicionados'>Adicionados</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <ButtonRed className='d-flex justify-content-center' onClick={handleShow}>
                            Adicionar Filme
                        </ButtonRed>
                        <Form className="d-flex" onSubmit={submitHandler}>
                            <FormControl
                                type="text"
                                placeholder="Pesquisar"
                                className="search-input"
                                aria-label="Search"
                                name="search"
                            />
                        </Form>
                        <NavDropdown title={<img src={UserIcon} alt='userIcon' />} id="navbarScrollingDropdown">
                            <NavDropdown.Item >Perfil</NavDropdown.Item>
                            <NavDropdown.Item >Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={showStatus} onHide={handleClose} backdrop="static" size="lg" >
                <Modal.Header closeButton >
                    <Modal.Title>Adicionar Filme</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddMovie />
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default NavbarComp;