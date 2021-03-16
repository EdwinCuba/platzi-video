import React from 'react';
import RegisterForm from '../components/RegisterForm.jsx';
import '../assets/styles/Register.css'

const Register = () => {
  return (
    <div className="Register">
      <section className="register-form">
        <RegisterForm />
      </section>
    </div>
  );
}

export default Register;