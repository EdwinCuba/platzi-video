import React from 'react';
import { connect } from 'react-redux';
import Header from '../../../assets/templates/Header';
import Search from '../components/Search.jsx';
import '../assets/styles/App.css';
import Categories from '../components/Categories.jsx';
import Carousel from '../components/Carousel.jsx';
import CarouselItem from '../components/CarouselItem.jsx';

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Header />
      <div className="Home">
        <Search />

        {mylist?.length > 0 &&
          <Categories title="Mi lista">
            <Carousel>
              {mylist?.map(item =>
                <CarouselItem
                  key={item.id}
                  {...item}
                  isList
                />
              )}
            </Carousel>
          </Categories>
        }

        <Categories title="Tendencias">
          <Carousel >
            {trends?.map(trendingItem =>
              <CarouselItem key={trendingItem.id} {...trendingItem} />
            )}
          </Carousel>
        </Categories>

        <Categories title="Originales de PlatziVideo">
          <Carousel >
            {originals?.map(originalItem =>
              <CarouselItem key={originalItem.id} {...originalItem} />
            )}
          </Carousel>
        </Categories>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  }
}

export default connect(mapStateToProps, null)(Home);