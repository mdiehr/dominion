import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Col from 'react-bootstrap/lib/Col';
import CardFull from '../parts/CardFull.jsx';

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
        const { cardName } = params;
        const card = _.find(CardStore, (cardItem) => (cardItem.name === cardName));

        return (
            <Col sm={8}>
                <h2>Card</h2>
                <CardFull card={card} />
            </Col>
        );
    }
}

export default connect(select)(Set);
