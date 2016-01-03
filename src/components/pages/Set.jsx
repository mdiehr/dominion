import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Col from 'react-bootstrap/lib/Col';
import CardList from '../parts/CardList.jsx';

// Connect to all of the stores that the app cares about
var select = (state) => ({
    CardStore: state.CardStore
});

class Set extends Component {
    static propTypes = {
        CardStore: PropTypes.array.isRequired
    };

    render() {
        const { CardStore, params } = this.props;
        const setName = params.setName;

        const cards = _.filter(CardStore, (card) => (card.set === setName));
        return (
            <Col sm={12}>
                <h2>{setName}</h2>
                <CardList cards={cards} />
            </Col>
        );
    }
}

export default connect(select)(Set);
