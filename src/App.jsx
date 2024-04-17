import React, { useEffect } from 'react'
import { DELETE_USER_PENDING, GET_USER_PENDING } from './redux-saga/user/action/action';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';

const App = () => {

  let dispatch = useDispatch();
  let user = useSelector(state => state.userReducer.user);
  useEffect(() => {
    dispatch({ type: GET_USER_PENDING })
  }, [])

  const hendel_delete_user = (id) => {
    dispatch({ type: DELETE_USER_PENDING,payload:id})
  }

  return (
    <div>
      <Form/>
      {
        user.map((item, index) => {
          return (
            <>
            <h1 key={index}>{item.email}</h1>
            <button onClick={()=>hendel_delete_user(item.id)}>Delete</button>
            </>
          )
        })
      }
    </div>
  )
}

export default App
