import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { PulseLoader } from 'halogen'

import Header from '../commons/Header'
import * as postActions from '../../actions/posts'
import PostList from './PostList'

class Post extends Component {
  constructor(props, context){
    super(props, context)
  }

  componentWillMount(){
    this.props.actions.fetchPosts().payload
      .then(posts => {
        console.log(posts)
        this.props.actions.fetchPostsSuccess(posts)
      })
      .catch(error => {
        console.log(error)
        this.props.actions.fetchPostsFailure(error)
      })
  }

  render(){
    let {posts, error,loading} = this.props.posts
    return (
      <div>
        <Header type="post"/>
        <div className="container">
          <h1 className="text-center">Lista de Posts</h1>
          {loading && <PulseLoader  color="#26A65B" size="16px" margin="4px"/>}
          {error && <p className="alert alert-danger">Error Al cargar los posts</p>}
          <PostList posts={posts}/>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.log(state)
  return {
    posts: state.posts.postList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
