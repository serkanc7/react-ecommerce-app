import { publicRequest } from "../request";
import { colorsConstants } from "./constants";

export const getAllColors = () => {
    return async (dispatch) => {

        dispatch({ type: colorsConstants.GET_ALL_COLORS_REQUEST });
        const res = await publicRequest.get('detail/color/all');
        const colorsData = res.data;

        if (res.status === 200) {
            dispatch({
                type: colorsConstants.GET_ALL_COLORS_SUCCESS,
                payload: { colorsData }
            });
        } else {
            dispatch({
                type: colorsConstants.GET_ALL_COLORS_FAILURE,
            })
        }
    }
}