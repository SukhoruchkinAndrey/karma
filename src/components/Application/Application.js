//@flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import ApolloClient from 'apollo-boost';
import Loadable from 'react-loadable';
import Loading from '../Loading/Loading';

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

const LoadableMainInfo = Loadable({
   loader: () => import('../MainInfo/MainInfo'),
   loading: Loading
});

const LoadableAddComment = Loadable({
   loader: () => import('../AddComment/AddComment'),
   loading: Loading
});

const LoadablePersonInfo = Loadable({
   loader: () => import('../PersonInfo/PersonInfo'),
   loading: Loading
});

const LoadableCommentInfo = Loadable({
   loader: () => import('../CommentInfo/CommentInfo'),
   loading: Loading
});

const LoadableFourZeroFour = Loadable({
   loader: () => import('../FourZeroFour/FourZeroFour'),
   loading: Loading
});

export const HeaderContext = React.createContext({
   color: 'POSITIVE',
   changeColor: () => {}
});

class Application extends Component {
   constructor(props) {
      super(props);

      this.state = {
         color: 'POSITIVE',
         changeColor: this.changeColor
      };
   }

   changeColor = color => {
      this.setState({
         color
      });
   };

   render() {
      return (
         <BrowserRouter>
            <ApolloProvider client={client}>
               <HeaderContext.Provider value={this.state}>
                  <Layout>
                     <Switch>
                        <Route path="/" component={LoadableMainInfo} exact />
                        <Route
                           path="/addComment"
                           component={LoadableAddComment}
                           exact
                        />
                        <Route
                           path="/person/:userId"
                           render={props => (
                              <HeaderContext.Consumer>
                                 {({ changeColor }) => (
                                    <LoadablePersonInfo
                                       {...props}
                                       changeColor={changeColor}
                                    />
                                 )}
                              </HeaderContext.Consumer>
                           )}
                           exact
                        />
                        <Route
                           path="/comment/:commentId"
                           component={LoadableCommentInfo}
                           exact
                        />
                        <Route component={LoadableFourZeroFour} />
                     </Switch>
                  </Layout>
               </HeaderContext.Provider>
            </ApolloProvider>
         </BrowserRouter>
      );
   }
}

export default Application;
