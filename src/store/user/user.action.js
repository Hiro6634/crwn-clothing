import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils"

export const setCurrentUser = (user) => 
    createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user);

<<<<<<< HEAD
=======
// CHECK_USER_SESSION:'user/CHECK_USER_SESSION',
// GOOGLE_SIGN_IN_START:'user/GOOGLE_SIGN_IN_START',
// EMAIL_SIGN_IN_START:'user/EMAIL_SIGN_IN_START',
// SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
// SIGN_IN_FILURE: 'user/SIGN_IN_FILURE',

>>>>>>> 06261ce4d81f6424dd055e0b36de2d42fea0840e
export const checkUserSession = () => 
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => 
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

<<<<<<< HEAD
export const emailSignInStart = (user, password) => 
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,{user, password});

export const signInSuccess = (user) => 
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) => 
=======
export const emailSignInStart = (email, password) => 
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password});

export const signInSuccess = ( user ) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = ( error ) =>
>>>>>>> 06261ce4d81f6424dd055e0b36de2d42fea0840e
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
