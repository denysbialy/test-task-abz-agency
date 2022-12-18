import { combineReducers } from "redux";
import workersReducer from "./workersReducer";

const rootReducer = combineReducers({
  worker : workersReducer,
});

export default rootReducer;