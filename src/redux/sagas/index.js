import { all } from 'redux-saga/effects';
import getTokens from './getTokenSaga.js'
import createWorkersSagas from './createWorkerSaga';
import workersSagas from "./workerSagas";

export default function* rootSaga() {
  yield all([workersSagas(),createWorkersSagas(), getTokens()])
  // yield workersSagas();
  // yield createWorkersSagas();
  // yield getToken();
}
