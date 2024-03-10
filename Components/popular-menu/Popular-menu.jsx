

import React from 'react';

import './popular-menu.css';

import { Container, Row, Col } from 'reactstrap';
import { PopularMenuFood } from '../../assets/fake-data/Product.js'
import ProductCart from '../Product-cart/ProductCart.jsx';




const Popularmenu = () => {
    return (
       
            <section className='pt-0' style={{backgroundColor:'black', paddingBottom:'50px'}}>
                 <Container>
                <Row style={{backgroundColor:'black', marginTop:'0px', width:'100%',marginLeft:'2px'}}>
                    <Col lg='12' className="mb-5">
                        <h2 style={{color:'#f5b70a', textAlign:'center',paddingTop:'30px', fontFamily:'cursive'}} className='popular_menu-title'>Popular Menu</h2>
                    </Col>
                    {
                        PopularMenuFood.map(item => (
                            <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                              <ProductCart item={item}/>
                            </Col>
                        ))
                    }
                </Row>
                </Container>
            </section>
        
    )
}

export default Popularmenu