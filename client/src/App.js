import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Dashboard from './containers/dashboard/DashboardContainer';
import store from './store/store';

class App extends Component {
  componentDidMount() {
    fetch('/api/demographic-data/')
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    );
  }
}

export default App;
