import React, { useState } from 'react'

function SingleImage(props) {
  // we construct the URL here via props
  // -- props.domainUrl
  // -- props.pxSize
  // -- props.hexColor
  // -- props.hexColorArray <--- this is where we will also get a random hex color
  // -- props.style <--- this is the local image style
  // -- -- url = `${props.domainUrl}/${props.pxSize}/${props.hexColor}`

  const [color, setColor] = useState(props.hexColor)

  const url = `${props.domainUrl}/${props.pxSize}/${color || 'FFFFFF'}`
  
  const handleEvent = () => {
    const randInd = Math.floor(Math.random() * props.hexColorArray.length)
    const randHex =  props.hexColorArray[randInd]
    setColor(randHex)
  }

  return (
    <img 
      style={props.style}
      src={url}
      onMouseOver={handleEvent}
    />
  )
}

export default SingleImage