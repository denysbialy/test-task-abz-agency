import { put, takeEvery } from 'redux-saga/effects';
import { getPositionError, getPositionSuccess} from '../actions';
import ACTION_TYPES from '../actions/actionTypes';
import * as API from '../../api';

function* positionsSaga(action) {
  try {
    const data = yield API.getPositions()
    yield put(getPositionSuccess(data));
} catch (error) {
  yield put(getPositionError(error));
  }
}


export default function * positionSaga() {
  yield takeEvery(ACTION_TYPES.GET_POSITION_REQUEST, positionsSaga);
}