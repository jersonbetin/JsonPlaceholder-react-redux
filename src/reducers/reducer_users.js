import { FETCH_USERS } from '../actions/users'

const initialState = {
  usersList:{ users: [], error: false, loading: false }
}

const userReducer = (state = initialState, action ) => {
  switch (action.type){
    case FETCH_USERS:
      return {...state, usersList:{ users: [], error: false, loading: true }}
    default:
      return state
  }
}

export default userReducer
