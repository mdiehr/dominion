import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/lib/Col';

import SetList from '../parts/SetList.jsx';

// Connect to all of the stores that the app cares about
var select = (state) => ({
    SetStore: state.SetStore
});

class Home extends Component {
    static propTypes = {
        SetStore: PropTypes.array.isRequired
    };

    render() {
        const { SetStore } = this.props;

        return (
            <div>
                <Col sm={4}>
                    <SetList sets={SetStore} />
                </Col>
                <Col sm={8}>
                    Click on a set to view its cards.
                </Col>
            </div>
        );
    }
}

export default connect(select)(Home);
