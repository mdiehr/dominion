import React, { Component, PropTypes } from 'react';
import { Redirect, Router, Route } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Application from './components/Application.jsx';
import Home from './components/pages/Home.jsx';
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
                {this.renderRoutes.bind(this, history)}
            </Provider>
        );
    }

    renderRoutes(history) {
        return (
            <Router history={history}>
                <Route component={Application}>
                    <Redirect from="/" to="home" />
                    <Route path="home" name="home" component={Home} />
                    <Route path='/*' component={NotFound} />
                </Route>
            </Router>
        );
    }
}
