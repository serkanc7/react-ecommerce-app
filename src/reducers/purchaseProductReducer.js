import { purchaseProductConstants } from "../actions/constants";

const initialState = {
    loading: false,
    error: false
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case purchaseProductConstants.PURCHASE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case purchaseProductConstants.PURCHASE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case purchaseProductConstants.PURCHASE_PRODUCT_FAILURE:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}

export default productsReducer;