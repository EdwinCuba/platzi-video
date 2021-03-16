import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => (
  <div className="App">
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default Layout;