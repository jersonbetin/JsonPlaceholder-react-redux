import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as postAction from '../../actions/posts'
import Header from '../commons/Header'
import PostForm from './PostForm'

class PostManagePage extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let {newPost} = this.props
    console.log(newPost)
    const style={'textAlign':'center'}
    return (
      <div>
        <Header type="post"/>
        <div className="container">
          <h1 style={style}>Nuevo Post</h1>
          <PostForm post={newPost.post}/>
        </div>
      </div>
    )
  }
}

PostManagePage.propTypes = {
  actions: PropTypes.object.isRequired,
  newPost: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.log(state)
  return {
    newPost: state.posts.newPost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostManagePage)
