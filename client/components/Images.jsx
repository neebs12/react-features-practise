import React from 'react'

import SingleImage from './SingleImage'

const IMAGE_SIDE_COUNT = 9 // n * n images
const PERMISSIBLE_WINDOW_PX = 500
const IMAGE_RESIZE_PX = Math.floor(PERMISSIBLE_WINDOW_PX / IMAGE_SIDE_COUNT) // lmao

const IMAGE_SIZE_PX = 300 // as requested
const HEX_ARRAY = ['FFFFF', '000000', 'FF0000', '0000FF', 'FFFFFF', '008000']
const TEST_URL = 'https://via.placeholder.com'

function Images() {

  const imageStyle = { // sick, this works with any!
    minWidth: IMAGE_RESIZE_PX,
    minHeight: IMAGE_RESIZE_PX,
    maxWidth: IMAGE_RESIZE_PX,
    maxHeight: IMAGE_RESIZE_PX
  }

  const gridTemplate = Array(IMAGE_SIDE_COUNT)
                         .fill(`${IMAGE_RESIZE_PX}px`)
                         .join(' ') 

  const gridStyle = { // LMAO
    display: 'grid',
    gridTemplateColumns: gridTemplate,
    gridTemplateRows: gridTemplate,
  }

  const randomImages = (_, ind) => {
    // will be passed to a map but will be ignored
    const randInd = Math.floor(Math.random() * HEX_ARRAY.length)
    const randHex = HEX_ARRAY[randInd]

    return (
      <SingleImage 
        key={ind} 
        domainUrl={TEST_URL}
        pxSize={IMAGE_SIZE_PX}
        hexColor={randHex}
        hexColorArray={HEX_ARRAY}
        style={imageStyle}
      />
    )

    // const constructURL = `${TEST_URL}/${IMAGE_SIZE_PX}/${randHex}`
    // return (
    //   <img key={ind} style={imageStyle} src={constructURL}/>
    // )
  }

  // so we want to wrap the images with two other divs in the same container

  const flexStyle = {
    display: 'flex',
    justifyContent: 'space-evenly'
  }

  // say we want to change a specific image in the collection by clicking on it (be clever!)
  // instead of using states, use local target technique

  return (
    <>
      <h1>These are the images</h1>
      <div className="flex-container" style={flexStyle}>
        <div className="random-space"></div>
        <div className="images" style={gridStyle} >
          {[...new Array(IMAGE_SIDE_COUNT ** 2)].map(randomImages)}
        </div>
        <div className="random-space"></div>
      </div>
    </>
  )
}

export default Images