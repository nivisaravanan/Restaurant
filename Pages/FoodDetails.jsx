import React from 'react'
import './fooddetail.css'

import fries from '../assets/images/fries.avif'

import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';

const FoodDetails= () => {




  return (
    <Helmet title='Product-Details'>
      <CommonSection title='Product-Details' />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='3' className='mb-4'>
              <div className="product_images">
                <div className="img_item">
                <img src={fries} alt="fries" className='w-50 ' />
                </div>

                <div className="img_item">
                <img src={fries} alt="fries" className='w-50' />
                </div>
                
                <div className="img_item">
                <img src={fries} alt="fries" className='w-50' />
                </div>

                
              </div>
            </Col>

            <Col lg='4' md='4' className='mb-4'>
              
            <div className="product_main-item">
                <img src={fries} alt="fries" className='w-100' />
                </div>
            </Col>

            <Col lg='4' md='4'>
              <div className="single_product-content">
                <h2 className='product_title mt-5'>Fries </h2>
                <span className='price' style={{color:"#f76e11", fontWeight:"600", fontSize:'20px'}}>Rs.150</span>
                <p>
                  Category:
                  <span>Fast Food Menu</span>
                </p>
                <button className='cart-btn '>Add to Cart</button>
              </div>
            </Col>

            <Col lg='12'>
              <div className="tabs d-flex align-item-center gap-3 py-3">
                <h6 className='tab_active'>Description</h6>
                <h6>Review</h6>
              </div>
              <div className="tab_content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit quia numquam nobis distinctio non repellendus eum id deserunt, ad perspiciatis accusamus quos aperiam magni a blanditiis delectus, deleniti adipisci laudantium cum consequuntur ullam consectetur pariatur. Nulla blanditiis impedit earum vitae distinctio, ad architecto voluptatem dolore eaque, ducimus ea. Voluptas.</p>
              </div>

              <div className="tab_form">
                <form className='form mb-4'> 
                <div className="form_group">
                <input type='text ' placeholder='Enter your FirstName..'/>
                </div>

                <div className="form_group">
                <input type='text ' placeholder='Enter your LastName..'/>
                </div>

                <div className="form_group">
                <textarea type='text ' placeholder='Enter your Message...'/>
                </div>
                <button className='cart-btn '>Submit</button>
                  
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails