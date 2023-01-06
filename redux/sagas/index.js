import { takeEvery, put } from 'redux-saga/effects';
import { GET_USERINFO } from '../constants';
import token from '../../components/MainContainer';
import { setUserInfo, setUserData } from '../action/actionCreate';

export function* workerSaga() {
    const { hits } = yield token();
    yield put(setUserInfo(hits));
}
export function* watchClickSaga() {
    yield takeEvery(GET_USERINFO, workerSaga);
}
export function* rootSaga() {
    yield watchClickSaga();
}