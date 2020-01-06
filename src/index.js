
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { passportReducer } from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(passportReducer, applyMiddleware(thunk));
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);

serviceWorker.unregister();