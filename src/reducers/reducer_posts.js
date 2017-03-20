import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../actions/posts'

const INITIAL_STATE = {
  postList: { posts: [], error: null , loading : false},
  newPost: { post: null, error: null, loading: false}
}

const postReduce = (state = INITIAL_STATE, action ) => {
  switch (action.type){
    case FETCH_POSTS:
      return { ...state, postList: { posts: [], error: null , loading : true} }
    case FETCH_POSTS_SUCCESS:
      return {...state, postList: { posts: action.payload, error: null , loading : false} }
    case FETCH_POSTS_FAILURE:
      return {...state, postList: { posts: [], error: action.payload , loading : false} }
    default:
      return state
  }
}

export default postReduce
