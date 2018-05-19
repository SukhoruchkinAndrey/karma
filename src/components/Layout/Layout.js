import React from 'react';
import logo from '../../logo.jpg';

const Layout = ({ children }) => (
   <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Bibosik</h1>
      </header>
      {children}
      <footer>Доволен?</footer>
   </div>
);

export default Layout;
