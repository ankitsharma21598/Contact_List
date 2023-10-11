import React from 'react';
// createRoot is used to create a root component that contains the component tree and children components.
import { createRoot } from 'react-dom/client';
//
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router } from 'react-router-dom';
// we are using here createStore because To create a store object in redux. 
import { createStore } from 'redux';
import contactReducer from './redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// with help of the provider we are accessing the store in our whole app component.
import { Provider } from 'react-redux';

// we are using here createStore because To create a store object in redux. 
const store = createStore(contactReducer, composeWithDevTools());

//  React utility function used to create a react root element.
const root = createRoot(document.querySelector('#root'));

// Now we render the root element.
root.render(
    <Provider store={store}>
        <Router>
            {/* Main File */}
            <App />
        </Router>
    </Provider>
);