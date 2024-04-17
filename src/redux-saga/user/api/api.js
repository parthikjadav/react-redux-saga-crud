import axios from "axios"
import { DELETE_USER, GET_USER, POST_USER, base_url } from "../../constants"

const get_user = () => {
    return axios.get(base_url + GET_USER).then((res) => {
        return { "data": res.data, "status":res.status}
    })
}

const post_user = (action) => {
    let data = action.payload
    return axios.post(base_url+POST_USER,data).then((res)=>{
        console.log(res,"res from api");
        return { "data": res.data, "status":res.status}
    })
}

const delete_user = (action) => {
    let data = action.payload
    console.log(base_url +DELETE_USER,data,"data");
return axios.delete(base_url+DELETE_USER+data).then((res)=>{
    console.log(res,"res from api");
    return { "data": res.data, "status":res.status}
})
}


export { get_user ,post_user,delete_user}