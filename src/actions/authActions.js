import { authConstants } from "./constants"
import { publicRequest } from "../request";

export const login = (user) => {
    console.log(user);
    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await publicRequest.post('authorization/signin', {
            ...user
        });

        if (res.status === 201) {
            const token = res.data.access_token;
            localStorage.setItem('token', token);
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
    }
}

export const signup = (user) => {
    return async (dispatch) => {

        dispatch({ type: authConstants.REGISTER_REQUEST });
        const res = await publicRequest.post('authorization/signup', {
            ...user
        });

        if (res.status === 201) {
            const token = res.data.access_token;
            localStorage.setItem('token', token);
            dispatch({
                type: authConstants.REGISTER_SUCCESS,
                payload: {
                    token
                }
            })
        } else {
            if (res.status === 400 || res.status === 409) {
                dispatch({
                    type: authConstants.REGISTER_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
    }
}


export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { token }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed to login' }
            })
        }
    }
}