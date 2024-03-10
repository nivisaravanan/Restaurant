import React, {Fragment} from 'react'

import Helmet from '../Components/Helmet/Helmet'
import HeroSlide from '../Components/heroslider/HeroSlide'
import Popularmenu from '../Components/popular-menu/Popular-menu'
import ChooseUs from '../Components/choose-us/ChooseUs'
import MenuPack from '../Components/menu-pack/MenuPack'
import Testimonial from '../Components/tesimonials/Testimonial'
import Download from '../Components/download_section/Download'





const Home = () => {
  return (
   <Fragment>
    <Helmet title='Home'>
     
    <HeroSlide/>
    <Popularmenu/>
    <ChooseUs/>
    <MenuPack/>
    <Testimonial/>
    <Download/>
    </Helmet>
   
    
   </Fragment>

  )
}

export default Home