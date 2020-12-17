import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';

ReactDOM.render(
  <React.StrictMode>
    <Canvas style={{height:'100%',width:'100%'}}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Canvas>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
