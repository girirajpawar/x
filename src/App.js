import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './components/Login';
import ProductList from './components/Login';
import { BrowserRouter, Route } from 'react-router-dom'

function App() { 
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route
              path="/login"
              component={Login}
              exact
            />
            <Route
              path="/"
              component={ProductList}
              exact
            />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
