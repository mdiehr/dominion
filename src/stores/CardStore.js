// Store for data input on the form
// import ActionTypes from '../constants/ActionTypes';

function getDefaultState() {
    return ['Copper', 'Silver', 'Gold'];
}

export default function FormStore(state = getDefaultState(), action) {
    // var newState;
    switch (action.type) {
    default:
        return state;
    }
}
