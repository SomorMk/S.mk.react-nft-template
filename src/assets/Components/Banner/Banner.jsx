import React from 'react'
import './Banner.css';
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../Images/KT5.jpg'
import img2 from '../../Images/KT7.jpg'
import img3 from '../../Images/KT8.jpg'

const Banner = () => {
  return (
    <>
        <section className='banner_section'>
            <Container>
                <Row className='banner_row'>
                    <Col xs={{order: 1}} lg={{span: 6, order: 0}} className='banner_left'>
                        <div className="banner_text">
                            <h1 className="banner_title">The S.Mk <br /> NFT Colleaction</h1>
                            <p className="banner_pera">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis iste quis fugiat eaque quaerat nobis voluptate nam aut exercitationem, sit sapiente dolore provident hic amet quidem labore pariatur autem.</p>
                            <a href="#" className="com_btn">Book Now</a>
                        </div>
                    </Col>
                    <Col xs={{order: 0}} lg={{span: 6, order: 1}} className='banner_right'>
                        <div className="banner_image">
                            <img src={img3} alt="Banner Image" />
                            <img src={img1} alt="Banner Image" />
                            <img src={img2} alt="Banner Image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Banner