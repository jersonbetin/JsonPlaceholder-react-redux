import React, {PropTypes} from 'react'
import { Field, reduxForm } from 'redux-form'

function create(post){
  console.log(post)
}

const PostForm = (props) => {
  const { handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit(create)}>
      <div>
        <Field name="title" component="input" type="text" placeholder="Title"/>
      </div>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>    
  )
}

PostForm.propTypes = {
  post:PropTypes.object,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
}

export default reduxForm({
  form:'postForm'
})(PostForm)
