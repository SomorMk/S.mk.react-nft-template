import React from 'react'
import './Community.css'
import { Col, Container, Row } from 'react-bootstrap'

const Community = () => {
  return (
    <>
        <section className='community_section'>
            <span className='top_head'>Don't miss</span>
            <Container>
                <Row className='community_row'>
                    <Col lg='12' className='community_col'>
                        <div className="community_inner">
                            <i className="fa-brands fa-discord"></i>
                            <h2 className="community_head">Join Our Community</h2>
                            <a href="#" className="com_btn">Join Discord</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Community