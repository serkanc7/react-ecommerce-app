import { publicRequest } from "../request";
import { categoriesConstants } from "./constants";

export const getAllCategories = () => {
    return async (dispatch) => {

        dispatch({ type: categoriesConstants.GET_ALL_CATEGORIES_REQUEST });
        const res = await publicRequest.get('detail/category/all');
        const categoriesData = res.data;

        if (res.status === 200) {
            dispatch({
                type: categoriesConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categoriesData }
            });
        } else {
            dispatch({
                type: categoriesConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}