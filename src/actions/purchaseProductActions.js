import { userRequest } from "../request";
import { purchaseProductConstants } from "./constants";

export const purchaseProduct = (id) => {
    return async (dispatch) => {

        dispatch({ type: purchaseProductConstants.PURCHASE_PRODUCT_REQUEST });
        const res = await userRequest.put(`product/purchase/${id}`);
        if (res.status === 200) {
            dispatch({
                type: purchaseProductConstants.PURCHASE_PRODUCT_SUCCESS,
            });
        } else {
            if (res.status === 401 || res.status === 404) {
                dispatch({
                    type: purchaseProductConstants.PURCHASE_PRODUCT_FAILURE,
                })
            }
        }
    }
}