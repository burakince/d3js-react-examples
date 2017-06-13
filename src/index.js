import React from 'react';
import ReactDOM from 'react-dom';

import App from './modules';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './modules/shared/reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);

registerServiceWorker();
