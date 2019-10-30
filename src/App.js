import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import PostcodeSearchContainer from './components/PostcodeSearchContainer'
import BeerDetailsContainer from './components/BeerDetailsContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={ PostcodeSearchContainer } />
          <Route path="/beers" component={ BeerDetailsContainer } />
        </div>
      </Provider>
    );
  }
}

export default App;