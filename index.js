var React = require('react');
import { Component } from 'react';
import { render } from 'react-dom';
import DevTools from './components/DevTools';
import AvailableUsers from './components/availableusers';
import {Provider} from 'react-redux';

import makeStore from './src/store';

export const store = makeStore();

store.dispatch({
  type: 'SET_ENTRIES',
  entries: ['jose', 'guerra', 'facu', 'loquito', 'defiesta']
});

render(
	<Provider store={store}>
		<AvailableUsers listUsers={store.getState().initialEntries}/>
		<DevTools />
	</Provider>,
	document.getElementById('root')
	);