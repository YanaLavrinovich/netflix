import {POPUP_TYPE} from "../../../layouts/MoviePopupContainer/constants";
import {SET_VISIBLE_POPUP_NAME} from "../types";
import {setVisiblePopupNameAction} from "../popups";


test('should create an action to set a visible popup name', () => {
    const expectedAction = {
        type: SET_VISIBLE_POPUP_NAME,
        payload: POPUP_TYPE.ADD
    }
    expect(setVisiblePopupNameAction(POPUP_TYPE.ADD)).toEqual(expectedAction)
})