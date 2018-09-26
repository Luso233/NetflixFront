import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Signup from './components/signup/Signup';
import Login from './components/login/login';
import { ApolloProvider } from 'react-apollo';
import client from './graphql'
import home from './components/home/home';
import {} from './resolvers/isAuthenticated'


class Routes extends Component {
    state = {  }
    render() {
        return ( 
            <Router>
            <ApolloProvider client={client}>
            <main>
            <Route exact path='/' component ={home}/>
            <Route exact path='/Login' component ={Login}/>
            <Route exact path='/signup' component ={Signup}/>
            </main>
            </ApolloProvider>
       </Router>
         );
    }
}
 
export default Routes;