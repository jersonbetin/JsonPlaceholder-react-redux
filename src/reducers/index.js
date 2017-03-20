import {combineReducers} from 'redux'
import users from './reducer_users'
import posts from './reducer_posts'

const rootReducers = combineReducers({
  users,
  posts
})

export default rootReducers
