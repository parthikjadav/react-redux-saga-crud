import { combineReducers } from "redux";
import userReducer from "./user/reducer/reducer"

let rootReducer = combineReducers({
    userReducer,
})

export default rootReducer;// src/redux-saga/rootSaga.js