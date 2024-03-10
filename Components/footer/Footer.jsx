import React from 'react'
import './footer.css'

import { Container, Row, Col,ListGroup, ListGroupItem } from 'reactstrap'


const footerQuickLinks=[
    {
        display:'Term & Conditions',
        url:'#'
    },
    {
        display:'Privacy Policy',
        url:'#'
    },
    {
        display:'Return & Refund',
        url:'#'
    },
    {
        display:'Payment Method',
        url:'#'
    },

]
const footerLinks=[
    {
        display:'About Us',
        url:'#'
    },
    {
        display:'Menu',
        url:'#'
    },
    {
        display:'Recipes',
        url:'#'
    },
    {
        display:'Contact',
        url:'#'
    },

]

const Footer = () => {
    return (
        <footer className="footer" style={{ background: 'black', paddingBottom: '0px',paddingTop:'50px' }}>
            <div className="footer_top">
                <Container>
                    <Row>
                        <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 className='d-flex align-items-center gap-1' style={{ color: '#f5b70a' }}>
                                    <span style={{ color: 'white' }} ><i class="ri-restaurant-2-line"></i>
                                    </span>{" "}
                                    Grilland
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam quam tempora itaque quo nostrum ab illo. </p>
                                <div className="social_media d-flex text-align-center gap-4">
                                <span><i class="ri-facebook-line"></i></span>
                                <span><i class="ri-twitter-line"></i></span>
                                <span><i class="ri-whatsapp-line"></i></span>
                                <span><i class="ri-instagram-line"></i></span>
                                </div>
                                
                            </div>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer_link-title">
                                Quick Links
                            </h5>
                            <ListGroup className="group">
                                {
                                    footerQuickLinks.map((item,index)=><ListGroupItem key={index} className='link-item'><a href={item.url}>{item.display}</a>
                                    </ListGroupItem>)
                                }
                                
                            </ListGroup>
                        </Col>

                        <Col lg='2' md='4' sm='5'>
                            <h5 className="footer_link-title">
                                Info Links
                            </h5>
                            <ListGroup className="group">
                                {
                                    footerLinks.map((item,index)=><ListGroupItem key={index} className='link-item'><a href={item.url}>{item.display}</a>
                                    </ListGroupItem>)
                                }
                                
                            </ListGroup>
                        </Col>

                        <Col lg='2' md='4' sm='6'>
                        <h5 className="footer_link-title">
                                Contact
                            </h5>

                            <ListGroup className="group">
                                <ListGroupItem className='link-item '>
                                <i class="ri-map-pin-line"></i>GandhiPuram,Coimbatore{" "}
                                </ListGroupItem>
                                <ListGroupItem className='link-item '>
                                <i class="ri-mail-line"></i>Grilland@gmail.com{" "}
                                </ListGroupItem>
                                <ListGroupItem className='link-item'>
                                <i class="ri-phone-line"></i>+91 8965482563{" "}
                                </ListGroupItem>
                               

                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="footer_bottom">
                <Container>
                    <Row>
                        <Col lg='12'><p>Copyright 2024, Developed By Niveditha. All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer