import React, {PropTypes} from 'react'

const PostList = ({posts}) => {
  return (
    <div className="col-lg-12">
      {
        posts.map(post => {
          return (
            <div className="col-lg-12" key={post.id}>
              <h3 className="col-lg-12">{post.title}</h3>
              <p className="col-lg-12">{post.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList
