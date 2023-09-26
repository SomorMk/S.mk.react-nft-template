import React from 'react'
import './Counter.css'
import { Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
  return (
    <>
        <section className='counter_section'>
            <Container>
                <Row className='counter_row'>
                    <Col xs='6' lg='3' className='counter_col'>
                        <div className="counter_item">
                            <h2 className='counter_number'>3000+</h2>
                            <p className="counter_text">Total Item</p>
                        </div>
                    </Col>
                    <Col xs='6' lg='3' className='counter_col'>
                        <div className="counter_item">
                            <h2 className='counter_number'>1186</h2>
                            <p className="counter_text">Total Owners</p>
                        </div>
                    </Col>
                    <Col xs='6' lg='3' className='counter_col'>
                        <div className="counter_item">
                            <h2 className='counter_number'>0.50</h2>
                            <p className="counter_text">Floor Price</p>
                        </div>
                    </Col>
                    <Col xs='6' lg='3' className='counter_col'>
                        <div className="counter_item">
                            <h2 className='counter_number'>950K</h2>
                            <p className="counter_text">Volume Traded</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Counter