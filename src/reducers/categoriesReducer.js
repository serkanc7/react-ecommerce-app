import { categoriesConstants } from "../actions/constants";

const initialState = {
    categoriesData: [],
    loading: false,
    error: null
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case categoriesConstants.GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesData: action.payload.categoriesData,
            }
        default:
            return state;
    }
}

export default categoriesReducer;
