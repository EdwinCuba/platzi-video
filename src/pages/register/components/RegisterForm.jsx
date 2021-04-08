import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../../../actions';
import { Link, withRouter } from 'react-router-dom';
import '../assets/styles/components/RegisterForm.css';

const RegisterForm = props => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  }

  return (
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input
          name="name"
          className="input"
          type="text"
          placeholder="Nombre"
          onChange={handleInput}
        />
        <input
          name="email"
          className="input"
          type="text"
          placeholder="Correo"
          onChange={handleInput}
        />
        <input
          name="password"
          className="input"
          type="password"
          placeholder="Contraseña"
          onChange={handleInput}
        />
        <button type="submit" className="button" onClick={handleSubmit}>Registrarme</button>
      </form>
      <Link to="/login" className="redirect-to-login">
        Iniciar sesión
      </Link>
    </section>
  );

}

const mapDispatchToProps = {
  registerRequest
};

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm));