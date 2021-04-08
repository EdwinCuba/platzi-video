import React from 'react';
import Header from '../../../assets/templates/Header';
import LoginForm from '../components/LoginForm.jsx'
import '../assets/styles/Login.css'

const Login = () => {
  return (
    <>
      <Header isLogin />
      <div className="Login">
        <section className="login-form">
          <LoginForm />
        </section>
      </div>
    </>
  )
}

export default Login;