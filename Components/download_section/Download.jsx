import React from 'react'
import './download.css'

import { Container,Row,Col } from 'reactstrap'
import app from '../../assets/images/app.png'

const Download = () => {
  return (
    <section style={{ background:'black',paddingBottom:'70px'}}>
        <Container className='app_container'>
            <Row>
                <Col lg='6' md='6'>
                    <div className="app_img">
                        <img src={app} alt="" />
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="app_content">
                        <h5 className='mt-5'>Download our App</h5>
                        <h2 className='mb-4 mt-3'>Never Feel Hungry! Download Our Mobile App Order Delicious Food</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint esse unde eveniet natus consequatur libero voluptatibus at veniam! Officiis fuga dolor molestiae deserunt unde numquam dolore nemo maiores aliquid?
                        </p>
                        <div className="app_btn d-flex align-item-center gap-5 mt-4">
                            <div className="btn_apple d-flex align-item-center gap-3">
                            <i class="ri-apple-line"></i> {" "}
                            <a href="#">Apple Store</a>
                            </div>

                            <div className="btn_google d-flex align-item-center gap-3 ">
                            <i class="ri-google-play-line"></i> <a href="#">Google Play </a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Download