import {all,call} from 'redux-saga/effects';
import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';

export function* rootSaga(){
    yield all([call(categoriesSaga), call(userSagas)]);
<<<<<<< HEAD
=======

>>>>>>> 06261ce4d81f6424dd055e0b36de2d42fea0840e
};