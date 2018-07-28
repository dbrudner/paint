import React from 'react';
import Paint from './paint';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';

const createReduxStore = applyMiddleware()(createStore);

export default function App() {
	return (
		<Provider store={createReduxStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
			<Paint />
		</Provider>
	)
}