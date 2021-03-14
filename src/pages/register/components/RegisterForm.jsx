import React from 'react';
import '../assets/styles/components/RegisterForm.css'

const RegisterForm = () => {
  return (
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button">Registrarme</button>
      </form>
      <a className="redirect-to-login" href="">Iniciar sesión</a>
    </section>
  );

}

export default RegisterForm;