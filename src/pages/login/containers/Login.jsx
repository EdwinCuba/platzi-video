import React from 'react';
import Header from '../../../assets/templates/Header.jsx';
import Footer from '../../../assets/templates/Footer.jsx';
import LoginForm from '../components/LoginForm.jsx'
import '../assets/styles/Login.css'

const Login = () => {
  return (
    <div className="Login">
      <Header />

      <main>
        <section className="login-form">
          <LoginForm />
        </section>

      </main>

      <Footer />
    </div>

  )
}

export default Login;