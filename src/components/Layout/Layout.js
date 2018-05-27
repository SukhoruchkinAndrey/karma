//@flow
import React, { Fragment } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Layout.css';
import { HeaderContext } from '../Application/Application';

const Layout = ({ children }: { children: Node }) => (
   <HeaderContext.Consumer>
      {({ color }) => (
         <Fragment>
            <header className={'Layout__header ' + color}>
               <Link to="/">
                  <img src={logo} className="Layout__header__logo" alt="logo" />
                  <h1 className="Layout__header__title">Karma</h1>
               </Link>
            </header>
            <main className="Layout__main">{children}</main>
            <footer className="Layout__footer">az as ps</footer>
         </Fragment>
      )}
   </HeaderContext.Consumer>
);

export default Layout;
