import { legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";  
import { studentReducer } from "./studentReducer";

export const store = legacy_createStore(
  studentReducer,
  applyMiddleware(thunk)
);
