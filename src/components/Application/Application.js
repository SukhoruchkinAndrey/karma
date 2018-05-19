import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainInfo from '../MainInfo/MainInfo';
import PersonInfo from '../PersonInfo/PersonInfo';
import FourZeroFour from '../FourZeroFour/FourZeroFour';
import Layout from '../Layout/Layout';

const Application = () => (
   <BrowserRouter>
      <Layout>
         <Switch>
            <Route path="/" component={MainInfo} exact />
            <Route path="/person/:userId" component={PersonInfo} exact />
            <Route component={FourZeroFour} />
         </Switch>
      </Layout>
   </BrowserRouter>
);

export default Application;
