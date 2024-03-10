import React, {useRef} from 'react';
import './header.css';

import { Container } from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/cartUiSlice';





const nav_links = [
    {
        display: 'Home',
        path:'/home',
    },
    {
        display: 'Food',
        path:'/food',
    },
    {
        display: 'Cart',
        path:'/cart',
    },
    {
        display: 'Contact',
        path:'/contact',
    },
]

const Header = () => {


    const menuRef = useRef()
    const totalQuantity=useSelector(state=>state.cart.totalQuantity);
    const dispatch=useDispatch()



    const menuToggle = () => menuRef.current.classList.toggle('active_menu');

    const toggleCart = ()=>{
        dispatch(cartUiActions.toggle())
    }
    return (
        <header className="header_shrink" >
            <Container>
                <div className="navigation">
                    <div className="logo">
                        <h2 className='d-flex align-items-center  gap-1' style={{ color: '#f5b70a' }}>
                            <span style={{ color: 'white' }} ><i class="ri-restaurant-2-line"></i>
                            </span>{" "}
                            Grilland
                        </h2>
                    </div>
                    {/* =======menu start====== */}
                    <div className="nav_menu" ref={menuRef}>
                        <div className="nav_list_wrapper d-flex align-items-center align-item-center gap-5">
                            <ul className="nav_list">
                                {nav_links.map((item, index) => (
                                    <NavLink to={item.path} key={index} onClick={menuToggle}>{item.display}</NavLink>
                                       
                                    )) }
                               
                            </ul>                          
                            <div className="menu_right">
                                <div className="custom_search">
                                    <input type='text' placeholder='search item...' />
                                    <span style={{ color: 'white' }}><i class="ri-search-line"></i></span>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*====== menu end====== */}

                    {/* =====nav right icon====== */}
                    <div>
                    <span className="cart_icon"  onClick={toggleCart}>
                    <i class="ri-shopping-cart-2-line"></i>
                    <span className="badge">{totalQuantity}</span>
                    </span>
                    </div>
                    <span className="user">
                        <Link to='/login'><i class="ri-user-line"></i></Link>
                    </span>
                    

                    <div className="mobile_menu">
                        <span style={{ color: 'white' }} ><i class="ri-menu-line" onClick={menuToggle}></i></span>
                    </div>

                    {/* =====icon end===== */}
                </div>
            </Container>
        </header>
    )
}

export default Header