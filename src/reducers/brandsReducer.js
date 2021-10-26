import { brandsConstants } from "../actions/constants";

const initialState = {
    brandsData: [],
    loading: false,
    error: false,
};

const brandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case brandsConstants.GET_ALL_BRANDS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case brandsConstants.GET_ALL_BRANDS_SUCCESS:
            return {
                ...state,
                brandsData: action.payload.brandsData,
                loading: false,
            }
        case brandsConstants.GET_ALL_BRANDS_FAILURE:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}

export default brandsReducer;