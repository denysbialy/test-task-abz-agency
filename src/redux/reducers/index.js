import { combineReducers } from "redux";
import createWorkerReducer from "./createWorkersReducer";
import getPositionReducer from "./positionsReducer";
import getTokenReducer from "./tokenReducer";
import workersReducer from "./workersReducer";

const rootReducer = combineReducers({
  worker : workersReducer,
  creationWorker: createWorkerReducer,
  token: getTokenReducer,
  positions: getPositionReducer
});

export default rootReducer;