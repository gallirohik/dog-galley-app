import dogsReducer from "./dogsreducer";
import oldDataReducer from "./oldDataReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  dogs: dogsReducer,
  oldData: oldDataReducer,
  auth: authReducer
});

export default allReducers;
