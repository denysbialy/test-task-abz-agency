import { put, takeEvery } from 'redux-saga/effects';
import { createWorkerError, createWorkerSuccess, } from '../actions';
import ACTION_TYPES from '../actions/actionTypes';
import * as API from '../../api';

function* createWorkerSaga(action) {
  try {
    const response = yield API.createWorker(action.payload.form, action.payload.token);
    yield put(createWorkerSuccess(response));
  } catch (error) {
    yield put(createWorkerError(error));
  }
}


export default function * createWorkersSagas() {
  yield takeEvery(ACTION_TYPES.CREATE_WORKER_REQUEST, createWorkerSaga);
}