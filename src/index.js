import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
