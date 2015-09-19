import '../assets/stylesheets/index.css';
import React from 'react';
import HashHistory from 'react-router/lib/HashHistory';
import Root from './Root';

const history = new HashHistory();

React.render(<Root history={history} />, document.body);
