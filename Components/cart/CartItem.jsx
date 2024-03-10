import React from 'react'
import { ListGroupItem } from 'reactstrap';

import './cartitem.css';

import { useDispatch } from 'react-redux';
import {cartActions} from '../../store/shopping-cart/cartSlice';

const CartItem = ({item}) => {

    const {id,title, price, imgUrl,quantity,totalPrice}=item;

    const dispatch=useDispatch()
    const incrementItem=()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            imgUrl,
        }))
    }

const decrementItem=()=>{
    dispatch(cartActions.removeItem(id));
};

const deleteItem=()=>{
    dispatch(cartActions.deleteItem(id))
}


    return (

        <ListGroupItem className='cart_item  border-0'>
            <div className="cart_item-info d-flex gap-2">
                <img src={imgUrl} alt="" />
                <div className="cart_product-info w-100 d-flex align-item-center gap-4 justify-content-between">
                <div>
                    <h6 className='cart_product-title'>{title}</h6>
                    <p className='cart_product-price d-flex align-item-center gap-4'>{quantity}x<span>Rs.{totalPrice}</span></p>
                    <div className='increase_decrease-btn d-flex align-item-center gap-3 justify-content-between '>
                        <span className='add-btn' onClick={incrementItem}>
                            <i class="ri-add-line" style={{color:"black"}}></i>
                            </span>
                    <span className='quantity'>{quantity}</span>
                    <span className='sub-btn' onClick={decrementItem}>
                        <i class="ri-subtract-line" style={{color:"black"}}></i>
                        </span>
                    </div>

                </div>

                <span className='delete_btn'>
                    <i class="ri-close-line" style={{color:"black"}} onClick={deleteItem}></i>
                    </span>
                </div>
            </div>
        </ListGroupItem>

    )
}

export default CartItem