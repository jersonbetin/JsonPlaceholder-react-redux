import axios from 'axios'
import {Api} from '../constants/index'


//Post list
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE= 'FETCH_POSTS_FAILURE'
export const CREATE_POST = 'CREATE_POST'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE'

export function fetchPosts(){
  const request = axios({
    method: 'get',
    url: `${Api}/posts`,
    headers: []
  })

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchPostsSuccess(posts){
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts.data
  }
}

export function fetchPostsFailure(error){
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

export function createPost(post){
  const request = axios({
    method: 'post',
    data: post,
    url: `${Api}/posts`,
    header: []
  })

  return {
    action: CREATE_POST,
    payload: request
  }
}

export function createPostSuccess(newPost){
  return {
    action: CREATE_POST_SUCCESS,
    payload: newPost
  }
}

export function createPostFailure(error){
  return {
    action: CREATE_POST_FAILURE,
    payload: error
  }
}
