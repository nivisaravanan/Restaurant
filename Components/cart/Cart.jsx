import React from 'react'
import { ListGroup } from 'reactstrap';

import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './shopping-cart.css'

import {useDispatch ,useSelector} from 'react-redux';
import { cartUiActions } from '../../store/cartUiSlice';

const Carts= () => {
const dispatch=useDispatch()
const cartProducts=useSelector(state=>state.cart.cartItems);
const totalAmount=useSelector(state=>state.cart.totalAmount)

const toggleCart = () =>{
  dispatch(cartUiActions.toggle())
}


  return (
   <div className="cart_container">
    <ListGroup className='cart'>

      <div className="cart_close">
        <span onClick={toggleCart}>
        <i class="ri-close-line" ></i>
        </span>
      </div>

      <div className="cart_item-list">
        { 
          cartProducts.length === 0 ? <h6 className='text-center mt-5'>
            No Item added tothe cart</h6>:cartProducts.map((item,index)=>(
              <CartItem item={item} key={index}/>
            ))
        }
       
    
       
       
      </div>

      <div className="cart_botton d-flex align-item-center  justify-content-between">
        <h6>subTotal :<span> Rs.{totalAmount}</span></h6>
        <button ><Link to='/checkout' className='check-btn'>Checkout</Link></button>
      </div>
      
    </ListGroup>
   </div>
  )
}

export default Carts;