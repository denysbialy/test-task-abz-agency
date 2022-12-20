import { combineReducers } from "redux";
import createWorkerReducer from "./createWorkersReducer";
import getTokenReducer from "./tokenReducer";
import workersReducer from "./workersReducer";

const rootReducer = combineReducers({
  worker : workersReducer,
  creationWorker: createWorkerReducer,
  token: getTokenReducer
});

export default rootReducer;