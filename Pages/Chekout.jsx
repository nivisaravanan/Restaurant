import React, { useState } from 'react'

import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../common-section/CommonSection';
import "./checkout.css";

import { Col, Container,Row } from 'reactstrap'
import { useSelector } from 'react-redux';

const Chekout = () => {

const [enterName,setEnterName]=useState('');
const [enterEmail,setEnterEmail]=useState('');
const [enterNumber, setEnterNumber] = useState('');
  const [enterCountry, setEnterCountry] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

const shippingInfo=[]

const CartTotalAmount =useSelector ((state)=>state.cart.totalAmount)
const shippingCost=30

const totalAmount=CartTotalAmount+Number(shippingCost);

const submitHandler=(e)=>{
e.preventDefault();
const userShippingAddress = {
  name: enterName,
  email: enterEmail,
  phone: enterNumber,
  country: enterCountry,
  city: enterCity,
  postalCode: postalCode,
};

shippingInfo.push(userShippingAddress);
console.log(shippingInfo);
};



  return (
   <Helmet title='Checkout'>
    <CommonSection title='Checkout'/>
    <section>
      <Container>
        <Row>
          <Col lg='8'  md='6'>
            <h6 className='mt-4'>Shipping Address</h6>
            <form className='checkout_form' onSubmit={submitHandler}>
             <div className="form_group">
              <input type='text' placeholder='Enter Your Name...' required onChange={(e)=>setEnterName(e.target.value)}/>
             </div>

             <div className="form_group">
              <input type='email' placeholder='Enter Your Email...'  required onChange={(e)=>setEnterEmail(e.target.value)}/>
             </div>
             <div className="form_group">
              <input type='number' placeholder='Enter Your Mobile Number...' required onChange={(e)=>setEnterNumber(e.target.value)}/>
             </div>
             <div className="form_group">
              <input type='text' placeholder='Enter Your Country...' required onChange={(e)=>setEnterCountry(e.target.value)}/>
             </div>

             <div className="form_group">
              <input type='text' placeholder='Enter Your City...' required onChange={(e)=>setEnterCity(e.target.value)}/>
             </div>

             <div className="form_group">
              <input type='number' placeholder='Enter Your Postal Code...' required onChange={(e)=>setPostalCode(e.target.value)}/>
             </div>

             <button type='submit' className='pay-btn mb-3'>Payment</button>

            </form>
         
          </Col>
          <Col lg='4' md='6'>
           <div className='checkout_bill mt-4'>
           <h6 className='d-flex align-item-center justify-content-between mb-3'>Subtotal: Rs.<span>{CartTotalAmount}</span></h6>
            <h6 className='d-flex align-item-center justify-content-between mb-3'>Shipping: <span>Rs.{shippingCost}</span></h6>
            <div className='checkout_total '>
              <h5  className='d-flex align-item-center justify-content-between mt-3'>Total:<span>Rs.{totalAmount}</span></h5>
            </div>
           </div>
            </Col>
        </Row>
      </Container>
    </section>


   </Helmet>
  )
}

export default Chekout