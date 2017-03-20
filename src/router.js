import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/index'
import Home from './components/home/index'
import About from './components/about/index'
import Post from './components/post/index'
import PostManagerPage from './components/post/PostManagePage'

export default (
  <Route path="/" components={App}>
    <IndexRoute components={Home}/>
    <Route path="about" components={About}/>
    <Route path="posts" components={Post}/>
    <Route path="post" components={PostManagerPage}/>
  </Route>
)
