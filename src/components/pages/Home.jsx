// This component renders the body of our app
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import * as VenueActions from '../../actions/VenueActions';
import Col from 'react-bootstrap/lib/Col';

// Connect to all of the stores that the app cares about
@connect(state => ({
    FormStore: state.FormStore,
    SetStore: state.SetStore,
    CardStore: state.CardStore
}))
export default class Home extends Component {
    static propTypes = {
        FormStore: PropTypes.object.isRequired,
        SetStore: PropTypes.array.isRequired,
        CardStore: PropTypes.array.isRequired
    };

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    render() {
        const { CardStore, SetStore } = this.props;
        // this.context.router
        return (
            <div className="container-fluid" role="main">
                <Col lg={4} md={4} sm={4} xs={12}>
                    <ul>
                        {SetStore.map( (set) => (
                            <li key={set}>
                                <Link to={`/set/${set}`}>{set}</Link>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col lg={8} md={8} sm={8} xs={12}>
                    {CardStore.map(card => {
                        return <div key={card}>{card}</div>;
                    })}
                </Col>
            </div>
        );
    }
}
