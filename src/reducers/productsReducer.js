import { productsConstants } from "../actions/constants";

const initialState = {
    productsData: [],
    loading: false,
    error: null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case productsConstants.GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
            }
        case productsConstants.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: true,
                productsData: action.payload.productsData,
            }
        default:
            return state;
    }
}

export default productsReducer;