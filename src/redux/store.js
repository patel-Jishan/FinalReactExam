import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";   
import { studentReducer } from "./studentReducer";

const rootReducer = combineReducers({
  students: studentReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
