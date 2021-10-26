import { colorsConstants } from "../actions/constants";

const initialState = {
    colorsData: [],
    loading: false,
    error: false,
};

const colorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case colorsConstants.GET_ALL_COLORS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case colorsConstants.GET_ALL_COLORS_SUCCESS:
            return {
                ...state,
                colorsData: action.payload.colorsData,
                loading: false,
            }
        case colorsConstants.GET_ALL_COLORS_FAILURE:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}

export default colorsReducer;