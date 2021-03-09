import React from 'react';
import '../assets/styles/components/CarouselItem.css'

const CarouselItem = () => {
  const API = 'http://localhost:3000/initalState';
  fetch(API)
    .then(response => JSON.parse(response))

  return(
      <div className="carousel-item">
      <img className="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src="https://github.com/platzi/curso-frontend-escuelajs/blob/master/platzi-video/curso-frontend-developer/assets/play-icon.png?raw=true" alt="Play Icon" />
          <img className="carousel-item__details--img" src="https://github.com/platzi/curso-frontend-escuelajs/blob/master/platzi-video/curso-frontend-developer/assets/plus-icon.png?raw=true" alt="Plus Icon" />
        </div>
        <p className="carousel-item__details--title">Título descriptivo</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>
  );
}

export default CarouselItem;