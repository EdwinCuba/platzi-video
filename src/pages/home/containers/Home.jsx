import React from 'react';
import Header from '../../../assets/templates/Header.jsx';
import Search from '../components/Search.jsx';
import '../assets/styles/App.css';
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
import Footer from '../../../assets/templates/Footer.jsx';
import useInitialState from '../../../hooks/useInitialState.js'

const Home = () => {
    const API = "http://localhost:3000/initalState";
    const initialState = useInitialState(API);

    return (

        initialState.length === 0 ? <h1>Cargando...</h1> : (

            <div className="Home">
                <Header />
                <main>
                    <Search />

                    {initialState.mylist?.length > 0 &&
                        <Categories title="Mi lista">
                            <Carousel>
                                {initialState.mylist?.map(item =>
                                    <CarouselItem key={item.id} {...item} />
                                )}
                            </Carousel>
                        </Categories>
                    }

                    <Categories title="Tendencias">
                        <Carousel >
                            {initialState.trends?.map(trendingItem =>
                                <CarouselItem key={trendingItem.id} {...trendingItem} />
                            )}
                        </Carousel>
                    </Categories>

                </main>

                <Footer />
            </div>
        )
    );
}

export default Home;