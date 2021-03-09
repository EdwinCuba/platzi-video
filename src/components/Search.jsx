import React from 'react';
import '../assets/styles/components/Search.css'

const main__title__text = '¿Que quieres ver hoy?';
const main_input_placeholder = 'Buscar...';

const Search = () => {
    return (
        <section className="main">
            <h2 className="main__title">{main__title__text}</h2>
            <input type="text" className="input" placeholder={main_input_placeholder} />
        </section>
    );
}

export default Search;