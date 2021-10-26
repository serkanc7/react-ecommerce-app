import { productDetail } from "../actions/constants";

const initialState = {
    productData: [],
    loading: false,
    error: null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case productDetail.GET_PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
            }
        case productDetail.GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                loading: true,
                productData: action.payload.productData,
            }
        default:
            return state;
    }
}

export default productsReducer;