import axios from 'axios'
import {Api} from '../constants/index'

//user list
export const FETCH_USERS = 'FETCH_USERS'

export function fetch_users(){
  const request = axios({
    method: 'GET',
    url: `${Api}/users`,
    headers:[]
  })

  return {
    action: FETCH_USERS,
    payload: request
  }
}
