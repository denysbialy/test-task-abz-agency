import { put, takeEvery } from 'redux-saga/effects';
import {getTokenError, getTokenSuccess, } from '../actions';
import ACTION_TYPES from '../actions/actionTypes';
import * as API from '../../api';

function* getToken(action) {
  try {
    const data = yield API.getToken();
    yield put(getTokenSuccess(data));
  } catch (error) {
    yield put(getTokenError(error));
  }
}


export default function * getTokens() {
  yield takeEvery(ACTION_TYPES.GET_TOKEN_REQUEST, getToken);
}