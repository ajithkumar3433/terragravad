import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/scss/index.scss';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
let persistor = persistStore(store)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
