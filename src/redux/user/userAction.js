import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './constants'
import axios from 'axios'

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = user => {
  return {
    type: FETCH_USER_SUCCESS,
    payload:user
  }
}

export const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload:error
  }
}

export const fetchUser = (user) =>
  dispatch => {
    console.log(user)
    dispatch(fetchUserRequest)
    let usernameurl = "?username=" + user // here we can implement better logic for uid pwd verification & encription
    axios.get('https://xebiascart.herokuapp.com/users'+usernameurl)
      .then(res => {
        const user = res.data
        dispatch(fetchUserSuccess(user))
        console.log(user)
      })
      .catch(err => {
        dispatch(fetchUserFailure(err)) 
        console.log(err)
      })
  }
