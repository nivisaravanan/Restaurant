import React,{useRef} from 'react'
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../common-section/CommonSection';
import './login.css'
import { Container,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {

const loginNameRef=useRef()
const loginpasswordRef=useRef()

const submitHandler =e=>{
  e.preventDefault()
}

  return (
<Helmet title='login'>
  <CommonSection title='Login'/>
  <section>
  <Container>
    <Row className='content'>
      <Col lg='6' md='6' sm='6' className='m-auto text-center'>
       <div className='login_form' >
       <form className='form mt-3 mb-3' onSubmit={submitHandler}>
         <h1>Create Account</h1>
         
         <span className='email'>or use your email password</span>
          <div className="form_group mt-3">
            <input type='email'placeholder='Enter your Email' required  ref={loginNameRef}/>
          </div>
          <div className="form_group">
            <input type='pasword'placeholder='Enter your Password' required ref={loginpasswordRef}/>
          </div>
          <button type='submit' className='login-btn'>Login</button>
        </form>
        <div className='link-signup' >
        <h6 >Already have an Account ? Create New Account{' '}
        <span><Link to='/register'>sign up</Link></span>  </h6>
        </div>
       </div>
       
        
      
        
      </Col>
    </Row>
  </Container>
  </section>
</Helmet>
  )
}

export default Login