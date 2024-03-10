import React, {useState,useEffect} from 'react'
import { Container,Row, Col } from 'reactstrap';

import ProductCart from '../Product-cart/ProductCart';
import { FastFoodProducts, RiceMenuProducts,PizzaProduct, DessertProduct,CoffeeProduct } from '../../assets/fake-data/Product';
import './menupack.css'

const MenuPack = () => {

const [filter,setFilter]=useState('RICE-MENU')
const [products,setProducts]=useState(RiceMenuProducts)

useEffect (()=>{
    if(filter==='RICE-MENU'){
        setProducts(RiceMenuProducts)
    }
    if(filter==='FAST-FOOD'){
        setProducts(FastFoodProducts)
    }
    if(filter==='PIZZA'){
        setProducts(PizzaProduct)
    }
    if(filter==='DESSERT'){
        setProducts(DessertProduct)
    }
    if(filter==='COFFEE'){
        setProducts(CoffeeProduct)
    
    }
},[filter])
  


  return (
    <section style={{ background:'black',paddingBottom:'50px'}}>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-4'><h3 className='menu_title'>Our Menu Pack</h3></Col>
                <Col lg='12'className='text-center mb-5'>
                    <button className={`filter-btn ${filter==='FAST-FOOD' ? 'active_btn':''}`} onClick={()=>setFilter('FAST-FOOD')}>Fast Food</button>
                    <button className={`filter-btn ${filter==='RICE-MENU' ? 'active_btn':''}`} onClick={()=>setFilter('RICE-MENU')}>Rice Menu </button>
                    <button className={`filter-btn ${filter==='PIZZA' ? 'active_btn':''}`} onClick={()=>setFilter('PIZZA')}>Pizza</button>
                    <button className={`filter-btn ${filter==='DESSERT' ? 'active_btn':''}`} onClick={()=>setFilter('DESSERT')}>Dessert</button>
                    <button className={`filter-btn ${filter==='COFFEE' ? 'active_btn':''}`} onClick={()=>setFilter('COFFEE')}>Coffee</button>
                    </Col>

                    {products.map(item=>(
                            <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'><ProductCart item={item}  /> </Col>
                        ))
                    }

                    
            </Row>

        </Container>
    </section>
  )
}

export default MenuPack


