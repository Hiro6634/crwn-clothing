import {takeLatest, put, all, call} from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { signInSuccess, signInFailed } from './user.action';
<<<<<<< HEAD

import { getCurrentUSer, createUserDocuemntFromAuth } from '../../utils/firebase/firebase.utils';
import { useState } from 'react';

export function* getSnapshotFromUserAuth (userAuth, additionalDetails) {
    try{
        const userSnapshot = yield call(createUserDocuemntFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch(error) {
=======
import { getCurrentUSer, createUserDocuemntFromAuth } from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try{
        const userSnapshot = yield call(createUserDocuemntFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(error){
>>>>>>> 06261ce4d81f6424dd055e0b36de2d42fea0840e
        yield put(signInFailed(error));
    }
}

<<<<<<< HEAD
export function* isUserAuthenticated(){
=======
export function* isUserAuthenticated() {
>>>>>>> 06261ce4d81f6424dd055e0b36de2d42fea0840e
    try{
        const userAuth = yield call(getCurrentUSer);
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
<<<<<<< HEAD
    } catch (error){
        yield put(signInFailed(error));
    }

}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,isUserAuthenticated);
}

export function* userSagas() {
    yield all([call(onCheckUserSession)]);
} 
=======
    } catch(error){
        yield put(signInFailed(error));
    }
}

export function* onCheckUSerSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,isUserAuthenticated)
} 

export  function*  userSagas() {
    yield all([call(onCheckUSerSession)]); 
    
}
>>>>>>> 06261ce4d81f6424dd055e0b36de2d42fea0840e
