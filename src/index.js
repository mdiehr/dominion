import '../assets/stylesheets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import history from './services/History.js';
import Root from './Root';

var container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<Root history={history} />, container);
