import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainInfo from '../MainInfo/MainInfo';

const Application = () => (
   <BrowserRouter>
      <MainInfo />
   </BrowserRouter>
);

export default Application;
