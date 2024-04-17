import { all } from "redux-saga/effects";
import { hendel_delete_user_saga, hendel_get_user_saga, hendel_post_user_saga } from "./saga/rootSaga";

function* rootSaga() {
    yield all([hendel_get_user_saga(),hendel_post_user_saga(),hendel_delete_user_saga()])
}

export default rootSaga;