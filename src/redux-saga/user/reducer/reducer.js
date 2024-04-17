import { DELETE_USER_FAILED, DELETE_USER_PENDING, DELETE_USER_SUCCESS, GET_USER_FAILED, GET_USER_PENDING, GET_USER_SUCCESS, POST_USER_FAILED, POST_USER_PENDING, POST_USER_SUCCESS } from "../action/action"

let initialState = {
    user: [],
    isLoading: false,
    isError: null,
}

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_USER_SUCCESS: {
            return {
                user: action.data,
                isLoading: false,
            }
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        }
        case POST_USER_PENDING:{
            return {
                ...state,
                isLoading: true
            }
        }
        case POST_USER_SUCCESS:{
            console.log("action.payload",action.payload);
            return{
                isLoading: false,
                user:state.user.concat(action.data)
            }
        }
        case POST_USER_FAILED:{
            return{
                ...state,
                isLoading:false,
                isError:action.data                
            }
        }
        case DELETE_USER_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case DELETE_USER_SUCCESS: {
            return{
                user:state.user.filter((item)=>item.id!==action.data.id),
                isLoading:false
            }
        }
        case DELETE_USER_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: action.data
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default userReducer;