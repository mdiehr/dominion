import React, { Component, PropTypes } from 'react';
import Header from '../components/parts/Header.jsx';

export default class Application extends Component {
    static propTypes = {
        children: PropTypes.any
    }

    render() {
        return (
            <div id="layout">
                <Header />
                <div id="main" className="container-fluid" role="main">
                    {/* this will render the child routes */}
                    {this.props.children}
                </div>
            </div>
        );
    }
}
