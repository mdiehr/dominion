// A form for logging in to mission control
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

export default class NotFound extends Component {
    static propTypes = {
        params: PropTypes.object.isRequired
    };

    render() {
        const { params } = this.props;

        return (
            <Col md={6} mdOffset={3}>
                <Panel bsStyle='danger' header="404">
                    <h1>Resource wasn't found.</h1>
                    <p>Resource requested: {JSON.stringify(params.splat)}</p>
                    <Link to='/'><Button block bsStyle='danger' bsSize='large'>Go home</Button></Link>
                </Panel>
            </Col>
        );
    }
}
