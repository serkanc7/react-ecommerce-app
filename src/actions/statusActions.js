import { publicRequest } from "../request";
import { statusConstants } from "./constants";

export const getAllStatus = () => {
    return async (dispatch) => {

        dispatch({ type: statusConstants.GET_ALL_STATUS_REQUEST });
        const res = await publicRequest.get('detail/status/all');
        const statusData = res.data;

        if (res.status === 200) {
            dispatch({
                type: statusConstants.GET_ALL_STATUS_SUCCESS,
                payload: { statusData }
            });
        } else {
            dispatch({
                type: statusConstants.GET_ALL_STATUS_FAILURE,
            })
        }
    }
}