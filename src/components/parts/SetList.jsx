// This component renders a list of sets
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class SetList extends Component {
    static propTypes = {
        sets: PropTypes.array.isRequired
    };

    render() {
        const { sets } = this.props;
        return (
            <ul>
                {sets.map((set) => (
                    <li key={set}>
                        <Link to={`/set/${set}`}>{set}</Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default SetList;
