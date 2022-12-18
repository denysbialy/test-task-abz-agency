import { all } from 'redux-saga/effects';
import workersSagas from "./workerSagas";

export default function* rootSaga() {
  yield workersSagas();
}
