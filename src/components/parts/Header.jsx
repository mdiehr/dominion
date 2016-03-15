// This component renders a nav bar which has dropdowns for the card selection
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavBar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';

// Connect to the stores that the header uses
var select = (state) => ({
    SetStore: state.SetStore
});

export default class Header extends Component {
    static propTypes = {
        SetStore: PropTypes.array.isRequired
    };

    render() {
        const { SetStore } = this.props;

        var siteName = 'Dominion Card Spoilers';

        return (
            <NavBar staticTop>
                <Nav>
                    <div className='navbar-header'><span className='navbar-brand'>{siteName}</span></div>
                    { SetStore.length > 0 ? (
                        <DropdownButton id="set-dropdown" eventKey={1} title='Choose Expansion'>
                            {SetStore.map((set) => (
                                <li id={set} key={set}>
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

export default connect(select)(Header);
