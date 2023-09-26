import React from 'react'
import './Roadmap.css'
import { Col, Container, Row } from 'react-bootstrap'

const Roadmap = () => {
  return (
    <>
        <section className='roadmap_section'>
            <Container>
                <Row className='heading_row'>
                    <Col lg='12'>
                        <h2 className="com_sec_head">Roadmap</h2>
                        <span>Timeline</span>
                    </Col>
                </Row>
                <Row className='roadmap_row'>
                    
                    <Col className='px-0'>

                        <Row className='p-0'>
                            <Col xs={{ span: 12, order: 1}} lg='6' className='roadmap_col'>
                            <div className="roadmap_number">
                                <h2>0%</h2>
                            </div>
                            </Col>
                            <Col xs={{ span: 12, order: 2}} lg='6' className='roadmap_col'>
                                <div className="roadmap_text">
                                    <h3>Community DAO</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat officiis ab laboriosam non necessitatibus tempore delectus ad expedita architecto mollitia quod ea repellat repellendus adipisci, quo ratione esse quam!</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className='p-0'>
                            <Col xs={{ span: 12, order: 2}} lg={{ span: 6, order: 1}} className='roadmap_col'>
                            <div className="roadmap_text">
                                <h3>Opening Event</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat officiis ab laboriosam non necessitatibus tempore delectus ad expedita architecto mollitia quod ea repellat repellendus adipisci, quo ratione esse quam!</p>
                            </div>
                            </Col>
                            <Col xs={{ span: 12, order: 1}} lg={{ span: 6, order: 2}} className='roadmap_col'>
                                <div className="roadmap_number">
                                    <h2>20%</h2>
                                </div>
                            </Col>
                        </Row>

                        <Row className='p-0'>
                            <Col xs={{ span: 12, order: 1}} lg='6' className='roadmap_col'>
                            <div className="roadmap_number">
                                <h2>40%</h2>
                            </div>
                            </Col>
                            <Col xs={{ span: 12, order: 2}} lg='6' className='roadmap_col'>
                                <div className="roadmap_text">
                                    <h3>Charity Donation</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat officiis ab laboriosam non necessitatibus tempore delectus ad expedita architecto mollitia quod ea repellat repellendus adipisci, quo ratione esse quam!</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className='p-0'>
                            <Col xs={{ span: 12, order: 2}} lg={{ span: 6, order: 1}} className='roadmap_col'>
                            <div className="roadmap_text">
                                <h3>Rare Giveaways</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat officiis ab laboriosam non necessitatibus tempore delectus ad expedita architecto mollitia quod ea repellat repellendus adipisci, quo ratione esse quam!</p>
                            </div>
                            </Col>
                            <Col xs={{ span: 12, order: 1}} lg={{ span: 6, order: 2}} className='roadmap_col'>
                                <div className="roadmap_number">
                                    <h2>60%</h2>
                                </div>
                            </Col>
                        </Row>

                        <Row className='p-0'>
                            <Col xs={{ span: 12, order: 1}} lg='6' className='roadmap_col'>
                            <div className="roadmap_number">
                                <h2>80%</h2>
                            </div>
                            </Col>
                            <Col xs={{ span: 12, order: 2}} lg='6' className='roadmap_col'>
                                <div className="roadmap_text">
                                    <h3>New NFT's</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat officiis ab laboriosam non necessitatibus tempore delectus ad expedita architecto mollitia quod ea repellat repellendus adipisci, quo ratione esse quam!</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className='p-0'>
                            <Col xs={{ span: 12, order: 2}} lg={{ span: 6, order: 1}} className='roadmap_col'>
                            <div className="roadmap_text">
                                <h3>Metaverse</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat officiis ab laboriosam non necessitatibus tempore delectus ad expedita architecto mollitia quod ea repellat repellendus adipisci, quo ratione esse quam!</p>
                            </div>
                            </Col>
                            <Col xs={{ span: 12, order: 1}} lg={{ span: 6, order: 2}} className='roadmap_col'>
                                <div className="roadmap_number">
                                    <h2>100%</h2>
                                </div>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </Container>
        </section>
    </>
  )
}

export default Roadmap