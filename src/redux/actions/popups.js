import {SET_VISIBLE_POPUP_NAME} from './types';

export const setVisiblePopupNameAction = (visiblePopupName) => {
    return {type: SET_VISIBLE_POPUP_NAME, payload: visiblePopupName}
}