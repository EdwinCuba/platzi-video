import React from 'react';
import Header from '../../../assets/templates/Header'
import RegisterForm from '../components/RegisterForm.jsx';
import '../assets/styles/Register.css'

const Register = () => {
  return (
    <>
      <Header isRegister />
      <div className="Register">
        <section className="register-form">
          <RegisterForm />
        </section>
      </div>
    </>
  );
}

export default Register;