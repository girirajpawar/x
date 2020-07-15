import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './constants'

const initialState = {
  loading: true,
  user: [],
  error:''
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_REQUEST: return {
      ...state,
      loading: true
    }
    case FETCH_USER_SUCCESS: return {
      loading: false,
      user: action.payload,
      error: ''
    }
    case FETCH_USER_FAILURE: return {
      loading: false,
      user: [],
      error: action.error
    }
    default: return state
  }
}

export default userReducer
