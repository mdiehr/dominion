import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import CardFull from './CardFull.jsx';

class CardList extends Component {
    static propTypes = {
        cards: PropTypes.array.isRequired
    };

    render() {
        const { cards } = this.props;
        return (
            <div>
                {cards.map((card) => (
                    <div key={card.name} style={{display: 'inline-block', padding: '0.5em'}}>
                        <Link to={`card/${card.name}`}><img src={card.img} /></Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default CardList;
