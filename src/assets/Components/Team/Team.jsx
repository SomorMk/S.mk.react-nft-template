import React from 'react'
import './Team.css'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../Images/team-1.jpg'
import img2 from '../../Images/team-2.jpg'
import img3 from '../../Images/team-3.jpg'
import img4 from '../../Images/team-4.jpg'

const Team = () => {
  return (
    <>
        <section className='team_section'>
            <Container>
                <Row className='heading_row'>
                    <Col lg='12'>
                        <h2 className="com_sec_head">Meet Our Team</h2>
                        <span>Leadership</span>
                    </Col>
                </Row>
                <Row className='team_row'>
                    <Col lg='3' className='team_col'>
                        <div className="team_item">
                            <div className="image">
                                <img src={img1} alt="Team Member Image" />
                            </div>
                            <div className="text">
                                <h3 className="member_name">Neil Patel</h3>
                                <p className="member_position">CEO & Founder</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' className='team_col'>
                        <div className="team_item">
                            <div className="image">
                                <img src={img2} alt="Team Member Image" />
                            </div>
                            <div className="text">
                                <h3 className="member_name">James Maxwell</h3>
                                <p className="member_position">Cheap Marketing Officer</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' className='team_col'>
                        <div className="team_item">
                            <div className="image">
                                <img src={img3} alt="Team Member Image" />
                            </div>
                            <div className="text">
                                <h3 className="member_name">Ruby Chintron</h3>
                                <p className="member_position">General Manager</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' className='team_col'>
                        <div className="team_item">
                            <div className="image">
                                <img src={img4} alt="Team Member Image" />
                            </div>
                            <div className="text">
                                <h3 className="member_name">Miky Singh</h3>
                                <p className="member_position">Developer</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' className='team_col'>
                        <div className="team_item">
                            <div className="image">
                                <img src={img4} alt="Team Member Image" />
                            </div>
                            <div className="text">
                                <h3 className="member_name">Simone Oliva</h3>
                                <p className="member_position">Developer</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' className='team_col'>
                        <div className="team_item">
                            <div className="image">
                                <img src={img3} alt="Team Member Image" />
                            </div>
                            <div className="text">
                                <h3 className="member_name">Callum Smith</h3>
                                <p className="member_position">Designer</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' className='team_col'>
                        <div className="team_item">
                            <div className="image">
                                <img src={img2} alt="Team Member Image" />
                            </div>
                            <div className="text">
                                <h3 className="member_name">Kenil Paul</h3>
                                <p className="member_position">Designer</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' className='team_col'>
                        <div className="team_item">
                            <div className="image">
                                <img src={img1} alt="Team Member Image" />
                            </div>
                            <div className="text">
                                <h3 className="member_name">James Anderson</h3>
                                <p className="member_position">Designer</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Team