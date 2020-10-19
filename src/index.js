import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Page/App';
import * as serviceWorker from './serviceWorker';

// Redux
import driverRedux from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={driverRedux}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
