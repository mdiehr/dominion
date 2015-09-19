// Store for data input on the form
import ActionTypes from '../constants/ActionTypes';

function getDefaultState() {
    return {};
}

export default function FormStore(state = getDefaultState(), action) {
    var newState;
    switch (action.type) {
    case ActionTypes.FORM_UPDATE_VALUE:
        newState = {...state};
        newState[action.key] = action.value;
        return newState;
    case ActionTypes.FORM_CLEAR:
        return getDefaultState();
    default:
        return state;
    }
}
