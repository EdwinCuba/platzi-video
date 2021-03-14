import React from 'react';
import Header from '../../../assets/templates/Header.jsx';
import RegisterForm from '../components/RegisterForm.jsx';
import Footer from '../../../assets/templates/Footer.jsx';
import '../assets/styles/Register.css'

const Register = () => {
  return (
    <div className="Register">
      <Header />

      <main>
        <section className="register-form">
          <RegisterForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Register;