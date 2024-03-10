import React from 'react'
import {Container, Row,Col} from 'reactstrap';
import './chooseus.css';

import burger from '../../assets/images/burger.avif';


const ChooseUs = () => {
  return (
  
  <section style={{background:"black", marginTop:'0px',paddingTop:'10px', }}>
    <Container>
        <Row>
            <Col lg='6' md='6'  className='choose_img' >
                <img src={burger} alt='' style={{width:'550px', height:'500px'}} className='w-100 '/>
            </Col>
            <Col lg='6' className=''>
                <div className="choose_contnet">
                    <h4>Who we are?</h4>
                    <h2>Take a look at the benefits we offer you</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores velit ratione deserunt consequuntur quis aperiam itaque animi quas dignissimos quos, possimus excepturi. Vitae nemo suscipit est! Soluta quos nobis corrupti.</p>

                </div>
                <div className="features mt-4">
                    <div className="feature1 d-flex align-items-center gap-5">
                        <div className="single_feature">
                            <span><i class="ri-truck-line"></i></span>
                            <h5>Free Home Delivery</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                        </div>

                        <div className="single_feature">
                            <span className='feature_icon-two'><i class="ri-money-rupee-circle-line"></i></span>
                            <h5>Return & Refund</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                        </div>

                       
                    </div>
                </div>
                <div className="features mt-3 d-flex align-item-center gap-3">
                    <div className="feature1 d-flex align-items-center gap-5">
                        <div className="single_feature">
                            <span className='feature_icon-3'><i class="ri-secure-payment-line"></i></span>
                            <h5>Secure Payment</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                        </div>

                        <div className="single_feature">
                            <span className='feature_icon-4'><i class="ri-24-hours-line"></i></span>
                            <h5>24/7 Hours Support</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                        </div>

                       
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default ChooseUs