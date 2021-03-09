import React from 'react';
import Header, { useEffect, useState } from '../components/Header.jsx';
import Search from '../components/Search.jsx';
import '../assets/styles/App.css';
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
import Footer from '../components/Footer.jsx';

const App = () => {
    const [ videos, setVideos ] = useState([]);

    return (
        <div className="App">
            <Header/>
            <main>
                <Search/>
                <Categories>
                    <Carousel>
                        <CarouselItem/>
                        <CarouselItem/>
                        <CarouselItem/>
                        <CarouselItem/>
                        <CarouselItem/>
                    </Carousel>
                </Categories>
            </main>

            <Footer/>
        </div>
    );
}

export default App;