import { statusConstants } from "../actions/constants";

const initialState = {
    statusData: [],
    loading: false,
    error: false,
};

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case statusConstants.GET_ALL_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case statusConstants.GET_ALL_STATUS_SUCCESS:
            return {
                ...state,
                statusData: action.payload.statusData,
                loading: false,
            }
        case statusConstants.GET_ALL_STATUS_FAILURE:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}

export default statusReducer;