import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Application from './components/Application.jsx';
import Home from './components/pages/Home.jsx';
import Set from './components/pages/Set.jsx';
import Card from './components/pages/Card.jsx';
import NotFound from './components/pages/NotFound.jsx';

import * as reducers from './stores';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
)(createStore);

const store = createStoreWithMiddleware(combineReducers(reducers));

export default class App extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    }

    render() {
        const { history } = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Application}>
                        <IndexRoute component={Home} />
                        <Route path="set/:setName" component={Set} />
                        <Route path="card/:cardName" component={Card} />
                        <Route path='/*' component={NotFound} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}
