// This component renders a nav bar which has dropdowns for the venue selection and logout
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavBar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';

// Connect to the stores that the header uses
@connect(state => ({
    SetStore:      state.SetStore
}))
export default class Header extends Component {
    static propTypes = {
        SetStore: PropTypes.array.isRequired
    };

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    render() {
        const { SetStore } = this.props;

        var siteName = 'Dominion Card Spoilers';

        return (
            <NavBar staticTop>
                <Nav>
                    <div className='navbar-header'><span className='navbar-brand'>{siteName}</span></div>
                    { SetStore.length > 0 ? (
                        <DropdownButton eventKey={1} title={'Options'}>
                            {SetStore.map( (set) => (
                                <li key={set}>
                                    <Link to={`/set/${set}`}>{set}</Link>
                                </li>
                            ))}
                        </DropdownButton>
                    ) : null}
                </Nav>
            </NavBar>
        );
    }
}
