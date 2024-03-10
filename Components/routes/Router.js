import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../../Pages/Home'
import AllFood from '../../Pages/AllFood';
import FoodDetails from '../../Pages/FoodDetails';
import Cart from '../../Pages/Cart';

import Checkout from '../../Pages/Chekout';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';
import Contact from '../../Pages/Contact';

const  Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/food' element={<AllFood/>}/>
            <Route path='/food/:id' element={<FoodDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    )
}

export default Router