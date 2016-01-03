import React, { PropTypes, Component } from 'react';

class CardFull extends Component {
    static propTypes = {
        card: PropTypes.object.isRequired
    };

    render() {
        const { card } = this.props;

        const cardBoxStyle = {float: 'left', padding: '0.5em'};

        return (
            <div>
                <div style={cardBoxStyle}>
                    <img src={`${card.img}`} />
                </div>
                <div style={cardBoxStyle}>
                    <h3>{card.name}</h3>
                    <div>Cost: {card.cost}</div>
                    <div>Potions: {card.costP}</div>
                    <div>Type: {card.type}</div>
                    <div>{card.text}</div>
                </div>
            </div>
        );
    }
}

export default CardFull;
