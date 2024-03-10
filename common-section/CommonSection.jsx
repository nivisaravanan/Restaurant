import React from 'react'
import { Container } from 'reactstrap';
import './common-section.css'

const CommonSection = (props) => {
  return (
    <section className='common_section'>
        <Container>
            <h2 style={{color:'white',fontWeight:'600',fontFamily:'sans-serif'}}>{props.title}</h2>
        </Container>
    </section>
  )
}

export default CommonSection