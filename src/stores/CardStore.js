// Store for data input on the form
// import ActionTypes from '../constants/ActionTypes';

function getDefaultState() {
    return [
		{name: 'Estate', set: 'Common', img: 'http://dominion.diehrstraits.com/scans/common/estate.jpg', type: 'Victory', cost: 2, costP: 0, text: '1 Victory.'},
		{name: 'Copper', set: 'Common', img: 'http://dominion.diehrstraits.com/scans/common/copper.jpg', type: 'Treasure', cost: 0, costP: 0, text: '1 Coin.'},
		{name: 'Silver', set: 'Common', img: 'http://dominion.diehrstraits.com/scans/common/silver.jpg', type: 'Treasure', cost: 3, costP: 0, text: '2 Coins.'},
		{name: 'Gold', set: 'Common', img: 'http://dominion.diehrstraits.com/scans/common/gold.jpg', type: 'Treasure', cost: 6, costP: 0, text: '3 Coins.'},
		{name: 'Duchy', set: 'Common', img: 'http://dominion.diehrstraits.com/scans/common/duchy.jpg', type: 'Victory', cost: 5, costP: 0, text: '3 Victory.'},
		{name: 'Province', set: 'Common', img: 'http://dominion.diehrstraits.com/scans/common/province.jpg', type: 'Victory', cost: 8, costP: 0, text: '6 Victory.'},
		{name: 'Curse', set: 'Common', img: 'http://dominion.diehrstraits.com/scans/common/curse.jpg', type: 'Curse', cost: 0, costP: 0, text: '-1 Victory.'},
		{name: 'Adventurer', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/adventurer.jpg', type: 'Action', cost: 6, costP: 0, text: 'Reveal cards from your deck until you reveal 2 Treasure cards. Put those Treasure cards into your hand and discard the other revealed cards.'},
		{name: 'Bureaucrat', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/bureaucrat.jpg', type: 'Action - Attack', cost: 4, costP: 0, text: 'Gain a silver card; put it on top of your deck. Each other player reveals a Victory card from his hand and puts it on his deck (or reveals a hand with no Victory cards).'},
		{name: 'Cellar', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/cellar.jpg', type: 'Action', cost: 2, costP: 0, text: '+1 Action, Discard any number of cards. +1 Card per card discarded.'},
		{name: 'Chancellor', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/chancellor.jpg', type: 'Action', cost: 3, costP: 0, text: '+2 Coins, You may immediately put your deck into your discard pile.'},
		{name: 'Chapel', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/chapel.jpg', type: 'Action', cost: 2, costP: 0, text: 'Trash up to 4 cards from your hand.'},
		{name: 'Council Room', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/councilroom.jpg', type: 'Action', cost: 5, costP: 0, text: '+4 Cards, +1 Buy, Each other player draws a card.'},
		{name: 'Feast', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/feast.jpg', type: 'Action', cost: 4, costP: 0, text: 'Trash this card. Gain a card costing up to 5 Coins.'},
		{name: 'Festival', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/festival.jpg', type: 'Action', cost: 5, costP: 0, text: '+2 Actions, +1 Buy, +2 Coins.'},
		{name: 'Gardens', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/gardens.jpg', type: 'Victory', cost: 4, costP: 0, text: 'Variable, Worth 1 Victory for every 10 cards in your deck (rounded down).'},
		{name: 'Laboratory', set: 'Base', img: 'http://dominion.diehrstraits.com/scans/base/laboratory.jpg', type: 'Action', cost: 5, costP: 0, text: '+2 Cards, +1 Action.'}
    ];
}

export default function FormStore(state = getDefaultState(), action) {
    // var newState;
    switch (action.type) {
    default:
        return state;
    }
}
