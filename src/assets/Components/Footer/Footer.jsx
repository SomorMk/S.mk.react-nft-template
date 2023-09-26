import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
        <footer className='footer_section'>
            <Container>
                <Row className='footer_row'>
                    <Col lg='12' className='footer_col'>
                        <ul className='footer_social'>
                            <li className='social_item'><a href="#" className='social_link'><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li className='social_item'><a href="#" className='social_link'><i class="fa-brands fa-twitter"></i></a></li>
                            <li className='social_item'><a href="#" className='social_link'><i class="fa-brands fa-instagram"></i></a></li>
                            <li className='social_item'><a href="#" className='social_link'><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li className='social_item'><a href="#" className='social_link'><i class="fa-brands fa-telegram"></i></a></li>
                        </ul>
                    </Col>
                    <Col lg='12' className='footer_col'>
                        <p className='footer_copyText'>Copyright @ 2023 S.MK. All Right Reserved</p>
                    </Col>
                    <Col lg='12' className='footer_col'>
                        <ul className="footer_nav">
                            <li className="footer_nav_item"><a href="#" className='footer_nav_link'>Security</a></li>
                            <li className="footer_nav_item"><a href="#" className='footer_nav_link'>Terms</a></li>
                            <li className="footer_nav_item"><a href="#" className='footer_nav_link'>Privacy</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}

export default Footer