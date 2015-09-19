import React, { Component, PropTypes } from 'react';
import Header from '../components/Header.jsx';

export default class Application extends Component {
    static propTypes = {
        children: PropTypes.any
    }

    render () {
        return (
            <div id="layout">
                <Header />
                <div id="main">
                    {/* this will render the child routes */}
                    {this.props.children}
                </div>
            </div>
        );
    }
}
