import React from 'react';
import LoginForm from '../components/LoginForm.jsx'
import '../assets/styles/Login.css'

const Login = () => {
  return (
    <div className="Login">
      <section className="login-form">
        <LoginForm />
      </section>
    </div>

  )
}

export default Login;