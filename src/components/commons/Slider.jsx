import React, {PropTypes} from 'react'
import {Carousel, CarouselItem} from 'react-bootstrap/lib'

const Slider = ({setting}) => {
  
  function renderItemSlider(item) {
    return (
      <CarouselItem key={item.src}>
        <img
          width={setting.width}
          height={setting.height}
          alt={setting.width+'x'+setting.height}
          src={item.src}/>
        <div className='carousel-caption'>
          {item.label && <h3>{item.label}</h3>}
          {item.body && <p>{item.body}</p>}
        </div>
      </CarouselItem>
    )
  }

  return (
    <Carousel>
      {
        setting.items.map(item => {
          return renderItemSlider(item)
        })
      }
    </Carousel>
  )
}

Slider.propTypes = {
  setting: PropTypes.object.isRequired
}


export default Slider
