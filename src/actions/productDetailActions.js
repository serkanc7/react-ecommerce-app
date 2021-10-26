import { publicRequest } from "../request";
import { productDetail } from "./constants";

export const getProductDetail = (id) => {
    return async (dispatch) => {

        dispatch({ type: productDetail.GET_PRODUCT_DETAIL_REQUEST });
        const res = await publicRequest.get(`product/${id}`);
        const productData = res.data;

        if (res.status === 200) {
            dispatch({
                type: productDetail.GET_PRODUCT_DETAIL_SUCCESS,
                payload: { productData }
            });
        } else {
            dispatch({
                type: productDetail.GET_PRODUCT_DETAIL_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}


