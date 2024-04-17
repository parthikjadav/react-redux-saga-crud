import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { POST_USER_PENDING } from '../redux-saga/user/action/action'

const Form = () => {

    const email = useRef()
    const password = useRef()

    let dispatch = useDispatch()

    const hendelSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: email.current.value,
            password: password.current.value
        }
        dispatch({type:POST_USER_PENDING,payload:data})
    }

    return (
        <div>
            <form onSubmit={hendelSubmit}>
                <input type="text" name='email' ref={email} />
                <input type="text" name='password' ref={password} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form
