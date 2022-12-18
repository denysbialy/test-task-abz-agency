import { call, put, takeEvery } from 'redux-saga/effects';
import { workingError, workingSuccess } from '../actions';
import ACTION_TYPES from '../actions/actionTypes';
import * as API from '../../api';

function* workingUserSaga(action) {
  try {
    const data = yield API.workingUser(action.payload);
    yield put(workingSuccess(data));
  } catch (error) {
    yield put(workingError(error));
  }
}


export default function * workersSagas() {
  yield takeEvery(ACTION_TYPES.WORKINING_USER_REQUEST, workingUserSaga);
}