import { publicRequest } from "../request";
import { productsConstants } from "./constants";

export const getAllProducts = () => {
    return async (dispatch) => {

        dispatch({ type: productsConstants.GET_ALL_PRODUCTS_REQUEST });
        const res = await publicRequest.get('product/all');
        const productsData = res.data;

        if (res.status === 200) {
            dispatch({
                type: productsConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { productsData }
            });
        } else {
            dispatch({
                type: productsConstants.GET_ALL_PRODUCTS_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}