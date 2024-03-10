

import React from 'react';
import './productcart.css';



import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';



const ProductCart = (props) => {
 const { id,title, imgUrl, price}= props.item;
 const dispatch=useDispatch()

 const addToCart=()=>{
    dispatch(cartActions.addItem({
        id,
        title,
        imgUrl,
        price,       

    }))
 }



    return (
        <div className="single_product">
            <div className="product_img">
                <img src={imgUrl} alt="" className='w-100' />
            </div>
            <div className="product_content">
                <div className="rating text-center ">
                    <span><i class="ri-star-half-line"></i></span>
                    <span><i class="ri-star-half-line"></i></span>
                    <span><i class="ri-star-half-line"></i></span>
                    <span><i class="ri-star-half-line"></i></span>
                    <span><i class="ri-star-half-line"></i></span>
                   
                </div>
                <h6 > {title}</h6>
                <div className=' d-flex align-item-center justify-content-between'>
                    <span className='price'> Price: Rs. <span>{price}</span>
                    </span>
                    <span className='Shopping_icon ' onClick={addToCart}><i class="ri-shopping-cart-2-line"></i></span>
                </div>
            </div>
        </div>
    )
}

export default ProductCart;