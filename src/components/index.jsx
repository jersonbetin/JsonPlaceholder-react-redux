import React, { Component, PropTypes } from 'react'

class App extends Component{
  constructor(props, context){
    super(props,context)
  }

  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
