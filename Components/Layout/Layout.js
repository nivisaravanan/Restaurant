import React from 'react'
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import Routes from '../routes/Router.js';

import Carts from '../cart/Cart.jsx';
import { useSelector } from 'react-redux';



const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />
      { showCart && <Carts/>}
      
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default Layout