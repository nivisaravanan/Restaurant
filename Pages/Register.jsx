import React,{useRef} from 'react'
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../common-section/CommonSection';
import { Container,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './login.css';

const Register = () => {

const signupNameRef=useRef()
const signuppasswordRef=useRef()
const signupEmailRef=useRef()

const submitHandler =(e)=>{
  e.preventDefault()
}
  return (
    <Helmet title='signup'>
  <CommonSection title='Sign Up'/>
  <section>
  <Container>
    <Row>
      <Col lg='6' md='6' sm='6' className='m-auto text-center'>
       <div className='login-form'>
       <form className='form mt-3 ' onSubmit={submitHandler}> 
        <h1>Sign Up</h1>
        
         <span className='email'>or use your email for registeration</span>    
        <div className="form_group mt-4">
            <input type='text'placeholder='Enter your Name' required  ref={signupNameRef}/>
          </div>    
          <div className="form_group">
            <input type='email'placeholder='Enter your Email' required  ref={signupEmailRef}/>
          </div>
          <div className="form_group">
            <input type='password'placeholder='Enter your Password' required ref={signuppasswordRef}/>
          </div>
          <button type='submit' className='login-btn'>Sign Up</button>
        </form>
        <div className='link-signup' >
        <h6 >Already have an Account ? Create New Account{' '}
        <span><Link to='/login'>Login</Link></span>  </h6>
        </div>
       </div>
        
        
      
        
      </Col>
    </Row>
  </Container>
  </section>
</Helmet>
  )
}

export default Register