import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension"
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./saga";

let sagaMiddlewere = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddlewere))
)

sagaMiddlewere.run(rootSaga)

export default store;