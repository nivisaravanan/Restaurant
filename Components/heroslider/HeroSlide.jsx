


import React from 'react'
import { Container } from 'reactstrap';
import Slider from 'react-slick';

import { SliderData } from '../../assets/fake-data/Slider';
import './slider.css'

const HeroSlide = () => {

    const setting ={
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:1000
    }
  return (
 <section style={{backgroundColor:'black',paddingTop:'-55px' }}>
    <Container className='slide'>
        <Slider {...setting}>
            {
                SliderData.map(item=>(
                    <div  key={item.id}>
                        <div className="slider_wrapper d-flex align-items-center justify-content-center  pt-5">
                            <div className="slider_content w-50 ps-2 "  >
                                <h5 className='mb-3' >
                                    {item.title}
                                </h5>
                                <p className='mb-3' >{item.desc}</p>
                                <button className="btn" >Explore food</button>
                            </div>
                            <div className="slider_img " >
                                <img src={item.imgUrl} alt="" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </Container>
 </section>
  )
}

export default HeroSlide