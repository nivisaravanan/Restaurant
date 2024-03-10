import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './testimonial.css';

import Slider from 'react-slick';
import test from '../../assets/images/test.avif'

const Testimonial = () => {

  const setting ={
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:2000
    }

  return (
    <section style={{ background: 'black', paddingBottom: '50px', paddingTop: '20px' }}>
      <Container>
        <Row  >
          <Col lg='8' md='12' sm='12' xs='10' className='m-auto'>
            <div className="slider_wrapper d-flex gap-5 align-item-center ">
              <div className="slider_content  " style={{width:'60%'}}>
              <h2 className='mb-4 ps-3'>What our customers are saying</h2>
            <Slider {...setting}>
              <div>
                <div className="single_testimonial">
                  <p className="review_content">
                    I love this northern Indian cuisine. The potato flat bread was spectacular, even turning one of my non- believer friends to the Indian cuisine light side. The samosas are beyond belief delicious, and the sauces that go with them make them perfect. Very good.      </p>
                  <h6>Manhattan</h6>
                  <p className='desgination'>Web Developer</p>
                </div>
              </div>

              <div>
                <div className="single_testimonial">
                  <p className="review_content">
                    Fantastic food! It was very fresh and flavorful. We could tell it was just made for us. A little slow, but worth the wait. Yum!</p>
                  <h6>Jongo</h6>
                  <p className='desgination'>Web Developer</p>
                </div>
              </div>

              <div>
                <div className="single_testimonial">
                  <p className="review_content">
                    Awesome food , best service and beautiful place!! One of the best Indian restaurant in town!! Go for it!!. Best indian food I have had in my life. Great service.</p>
                  <h6>Claudine</h6>
                  <p className='desgination'>Web Developer</p>
                </div>
              </div>
              
            </Slider>
                </div>
                <div className="slider_img w-50 ">
                <img src={test} alt="" className='h-100' />

                </div>
                </div>
            
          </Col>
         
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;