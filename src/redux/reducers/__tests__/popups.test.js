import {popups} from "../popups";
import {SET_VISIBLE_POPUP_NAME} from "../../actions/types";
import {POPUP_TYPE} from "../../../layouts/MoviePopupContainer/constants";

describe('popups reducer', () => {
    it('should return the initial state', () => {
        expect(popups(undefined, {})).toEqual(
            {
                visiblePopupName: null
            }
        )
    })

    it('should handle SET_VISIBLE_POPUP_NAME', () => {
        expect(
            popups(undefined, {
                type: SET_VISIBLE_POPUP_NAME,
                payload: POPUP_TYPE.ADD
            })
        ).toEqual(
            {
                visiblePopupName: POPUP_TYPE.ADD
            }
        )
    })
})
