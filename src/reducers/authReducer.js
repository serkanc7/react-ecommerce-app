import { authConstants } from "../actions/constants";

const initialState = {
    token: null,
    authenticate: false,
    authenticating: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true
            }
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }

        case authConstants.REGISTER_REQUEST:
            return {
                ...state,
                authenticating: true
            }
        case authConstants.REGISTER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
        default:
            return state;

    }
}
export default authReducer;