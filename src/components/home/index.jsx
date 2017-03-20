import React, {Component} from 'react'
import Header from '../commons/Header'

import Slider from '../commons/Slider'

class Home extends  Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    const settings = {
      width:'1140',
      height:'500',
      items:[
        {
          src:'http://placekitten.com/g/1140/500',
          label:'First slide label',
          body:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
          src:'http://placehold.it/1140x500',
          label:'Second slide label',
          body:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
          src:'http://placehold.it/1140x500/ff00ff/ffff00',
          label:'Third slide label',
          body:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }
      ]
    }

    return (
      <div>
        <Header/>
        <div className="container">
          <Slider setting={settings}/>
        </div>
      </div>
    )
  }
}



export default Home
