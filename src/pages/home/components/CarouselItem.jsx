import React from 'react';
import '../assets/styles/components/CarouselItem.css'

const CarouselItem = ({ title, cover, year, contentRating, duration }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt="image" />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src="/assets/static/play-icon.png" alt="Play Icon" />
          <img className="carousel-item__details--img" src="/assets/static/plus-icon.png" alt="Plus Icon" />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} | ${contentRating} | ${duration}`}</p>
      </div>
    </div>
  );
}

export default CarouselItem;