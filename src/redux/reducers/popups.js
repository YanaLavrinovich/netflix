import {SET_VISIBLE_POPUP_NAME} from '../actions/types';

const initialState = {
    visiblePopupName: null
};

export function popups(state = initialState, action) {
    if (action.type === SET_VISIBLE_POPUP_NAME) {
        return {
            ...state,
            visiblePopupName: action.payload
        }
    } else {
        return state;
    }
}