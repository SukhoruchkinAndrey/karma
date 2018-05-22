//@flow
import React, { Fragment } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Layout.css';

const Layout = ({ children }: { children: Node }) => (
   <Fragment>
      <header className="Layout__header">
         <Link to="/">
            <img src={logo} className="Layout__header__logo" alt="logo" />
            <h1 className="Layout__header__title">Karma</h1>
         </Link>
      </header>
      {children}
      <footer className="Layout__footer">az as ps</footer>
   </Fragment>
);

export default Layout;
