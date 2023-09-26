import React from 'react'
import './FAQ.css'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

const FAQ = () => {
  return (
    <>
        <section className='faq_section'>
            <Container>
                <Row className='heading_row'>
                    <Col lg='12'>
                        <h2 className="com_sec_head">Frequently Asked Question</h2>
                        <span>Questions</span>
                    </Col>
                </Row>
                <Row className='faq_row'>
                    <Col lg='6' className='faq_col'>
                      <div className="faq_left">

                        <Accordion defaultActiveKey="0">

                          <Accordion.Item eventKey="0" className='faq_item'>
                            <Accordion.Header className='faq_question'>What is S.MK NFT?</Accordion.Header>
                            <Accordion.Body className='faq_ans'>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sequi optio repellat impedit iure atque, hic fugit sed, ipsam, veniam ab architecto magni minus enim cum id iste numquam. Nam.
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="1" className='faq_item'>
                            <Accordion.Header>Accordion</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sequi optio repellat impedit iure atque, hic fugit sed, ipsam, veniam ab architecto magni minus enim cum id iste numquam. Nam.
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="2" className='faq_item'>
                            <Accordion.Header>Accordion</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sequi optio repellat impedit iure atque, hic fugit sed, ipsam, veniam ab architecto magni minus enim cum id iste numquam. Nam.
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="3" className='faq_item'>
                            <Accordion.Header>Accordion</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sequi optio repellat impedit iure atque, hic fugit sed, ipsam, veniam ab architecto magni minus enim cum id iste numquam. Nam.
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="4" className='faq_item'>
                            <Accordion.Header>Accordion</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sequi optio repellat impedit iure atque, hic fugit sed, ipsam, veniam ab architecto magni minus enim cum id iste numquam. Nam.
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="5" className='faq_item'>
                            <Accordion.Header>Accordion</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sequi optio repellat impedit iure atque, hic fugit sed, ipsam, veniam ab architecto magni minus enim cum id iste numquam. Nam.
                            </Accordion.Body>
                          </Accordion.Item>

                        </Accordion>

                      </div>
                    </Col>
                    <Col lg='6' className='faq_col'></Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default FAQ