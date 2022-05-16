import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export const userReducer = (state=INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
<<<<<<< HEAD
            return { ...state, currentUser: payload };
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return { ...state, error: payload };
=======
            return {
                ...state,
                currentUser: payload
            };
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return{
                ...state,
                error: payload
            }
>>>>>>> 06261ce4d81f6424dd055e0b36de2d42fea0840e
        default:
            return state;
    }
};