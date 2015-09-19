// Form actions
import ActionTypes from '../constants/ActionTypes';

export function updateValue(key, value) {
    return { type: ActionTypes.FORM_UPDATE_VALUE, key, value };
}

export function clearForm() {
    return { type: ActionTypes.FORM_CLEAR };
}
