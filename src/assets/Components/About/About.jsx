import React from 'react'
import './About.css'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../Images/OS1.jpg'
import img2 from '../../Images/OS5.jpg'

const About = () => {
  return (
    <>
        <section className='about_section'>
            <Container>
                <Row className='heading_row'>
                    <Col lg='12'>
                        <h2 className="com_sec_head">Our Story</h2>
                        <span>About us</span>
                    </Col>
                </Row>
                <Row className='about_row'>
                    <Col lg='6' className='about_col'>
                        <div className="about_left">
                            <img src={img1} alt="About Image" />
                            <img src={img2} alt="About Image" />
                        </div>
                    </Col>
                    <Col lg='6' className='about_col'>
                        <div className="about_right">
                            <h2 className='about_inner_title'>Welcome to the S.MK NFT Art STudio</h2>
                            <p className="about_inner_info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aspernatur placeat magni delectus ipsa repudiandae, recusandae aliquam aliquid soluta, dolorem porro modi inventore eveniet? Quaerat ea eos nam? Laborum, ad.
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis incidunt veritatis dignissimos quae, deserunt vitae itaque harum provident a saepe tempora nam dicta suscipit impedit error veniam? Molestiae, quibusdam velit.</span>
                            </p>
                            <a className='com_btn' href="#">Join Our Discord</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default About