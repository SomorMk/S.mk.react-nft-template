import React from 'react'
import { useState } from 'react';
import './Navbar.css';
import { Col, Container, Row, Button, Offcanvas } from 'react-bootstrap'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
<>
    <section className='navbar_section'>
        <Container>
            <Row className='nav_sec_row'>
                <Col xs='12'>
                    <Row className='mobile_nav d-md-none'>
                        <Col>
                            <div className="mobile_nav_logo">
                                <a href="#"><span>NFT.MK</span></a>
                            </div>
                        </Col>
                        <Col className='text-end'>
                            <Button variant="primary" className="nav_btn d-md-none" onClick={handleShow}><i class="fa-solid fa-bars-staggered"></i></Button>
                        </Col>
                    </Row>


                    <Offcanvas show={show} onHide={handleClose} responsive="md">

                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Row className='main_nav'>
                                <Col lg='3' className='nav_left'>
                                    <div className="nav_logo">
                                        <a href="#"><span>NFT.MK</span></a>
                                    </div>
                                </Col>
                                <Col lg='9' className='nav_right'>
                                    <ul className="navbar_nav">
                                        <li className="nav_item"><a href="#" className="nav_link active">Home</a></li>
                                        <li className="nav_item"><a href="#" className="nav_link">About</a></li>
                                        <li className="nav_item"><a href="#" className="nav_link">Roadmap</a></li>
                                        <li className="nav_item"><a href="#" className="nav_link">Team</a></li>
                                        <li className="nav_item"><a href="#" className="nav_link">FAQ</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Offcanvas.Body>

                    </Offcanvas>
                </Col>
            </Row>
        </Container>
    </section>
</>
)
}

export default Navbar