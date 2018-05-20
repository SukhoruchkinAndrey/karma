//@flow
import React, { Fragment } from 'react';
import type { Node } from 'react';
import logo from '../../logo.jpg';

const Layout = ({ children }: { children: Node }) => (
   <Fragment>
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Bibosik</h1>
      </header>
      {children}
      <footer />
   </Fragment>
);

export default Layout;
