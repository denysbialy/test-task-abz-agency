import { all } from 'redux-saga/effects';
import getTokens from './getTokenSaga.js'
import createWorkersSagas from './createWorkerSaga';
import workersSagas from "./workerSagas";
import positionSaga from './getPositionsSaga.js';

export default function* rootSaga() {
  yield all([workersSagas(),createWorkersSagas(), getTokens(), positionSaga()]);
}
