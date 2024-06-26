import { call, put } from "redux-saga/effects";
import { delete_user, get_user, post_user } from "../../user/api/api";
import { DELETE_USER_FAILED, DELETE_USER_SUCCESS, GET_USER_FAILED, GET_USER_SUCCESS, POST_USER_FAILED, POST_USER_PENDING, POST_USER_SUCCESS } from "../../user/action/action";

function* hendel_get_user(action) {
    try {
        let { data, status } = yield call(get_user, action)

        if (status == 200) {
          
            yield put({ type: GET_USER_SUCCESS, data })
        } else {
            yield put({ type: GET_USER_FAILED, data })
        }

    } catch (error) {
        yield put({ type: GET_USER_FAILED, error })

    }
}

function* hendel_post_user(action) {
    try {
        let {data,status} = yield call(post_user,action)
         console.log(data,"data from manage user");
        if(status == 200||201){
            yield put({ type: POST_USER_SUCCESS,data})
        }else{
            yield put({type:POST_USER_FAILED,data})
        }
        
    } catch (error) {
        yield put({type:POST_USER_FAILED,error})
    }
}

function* hendel_delete_user(action){
    try {
        let {data,status} = yield call(delete_user,action)

        if(status == 200){
            yield put({type:DELETE_USER_SUCCESS,data})
        }else{
            yield put({type:DELETE_USER_FAILED,data})
        }
    } catch (error) {
        yield put({type:DELETE_USER_FAILED,error})
    }
}

export { hendel_get_user ,hendel_post_user,hendel_delete_user}