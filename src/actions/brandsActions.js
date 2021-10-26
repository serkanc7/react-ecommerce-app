import { publicRequest } from "../request";
import { brandsConstants } from "./constants";

export const getAllBrands = () => {
    return async (dispatch) => {

        dispatch({ type: brandsConstants.GET_ALL_BRANDS_REQUEST });
        const res = await publicRequest.get('detail/brand/all');
        const brandsData = res.data;

        if (res.status === 200) {
            dispatch({
                type: brandsConstants.GET_ALL_BRANDS_SUCCESS,
                payload: { brandsData }
            });
        } else {
            dispatch({
                type: brandsConstants.GET_ALL_BRANDS_FAILURE,
            })
        }
    }
}