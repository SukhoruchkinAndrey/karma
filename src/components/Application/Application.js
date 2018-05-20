//@flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainInfo from '../MainInfo/MainInfo';
import PersonInfo from '../PersonInfo/PersonInfo';
import FourZeroFour from '../FourZeroFour/FourZeroFour';
import Layout from '../Layout/Layout';
import AddComment from '../AddComment/AddComment';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import ApolloClient from 'apollo-boost';
import CommentInfo from '../CommentInfo/CommentInfo';

const httpLink = createHttpLink({
   uri: 'https://api.graph.cool/simple/v1/cjheqf6vg01lo0196ev30m9zb'
});

// const authLink = setContext((_, { headers }) => {
//    // get the authentication token from local storage if it exists
//    const token = localStorage.getItem('karmaToken');
//    // return the headers to the context so httpLink can read them
//    return {
//       headers: {
//          ...headers,
//          authorization: token ? `Bearer ${token}` : "",
//       }
//    }
// });

// const client = new ApolloClient({
//    link: authLink.concat(httpLink)
// });

const client = new ApolloClient({
   uri: 'https://api.graph.cool/simple/v1/cjheqf6vg01lo0196ev30m9zb'
});

const Application = () => (
   <BrowserRouter>
      <ApolloProvider client={client}>
         <Layout>
            <Switch>
               <Route path="/" component={MainInfo} exact />
               <Route path="/addComment" component={AddComment} exact />
               <Route path="/person/:userId" component={PersonInfo} exact />
               <Route
                  path="/comment/:commentId"
                  component={CommentInfo}
                  exact
               />
               <Route component={FourZeroFour} />
            </Switch>
         </Layout>
      </ApolloProvider>
   </BrowserRouter>
);

export default Application;
