import React from 'react'
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
 
import './all-food.css'



import MenuPack from '../Components/menu-pack/MenuPack';

const Allfood = () => {
  
  return (
    <Helmet title='All Foods'>
      <CommonSection title='All Foods' />

      <Container className='foods'>
        <Row className='mt-3'>
          <Col lg='6' md='12' sm='12' className='mb-3'>
            <div className='search_widget d-flex align-item-center justify-content-between w-50'>
              <input type='text' placeholder=" I'm looking for..." />
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>      
      
              <Col lg='12' md='12'  xs='12' className='mb-5'>
                <MenuPack />
              </Col>
          

        </Row>
      </Container>



    </Helmet>
  )
}

export default Allfood