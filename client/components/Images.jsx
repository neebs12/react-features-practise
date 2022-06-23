import React from 'react'

const IMAGE_SIDE_COUNT = 9 // 3 * 3 = 9 images
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

  const containerStyle = { // LMAO
    display: 'grid',
    gridTemplateColumns: gridTemplate,
    gridTemplateRows: gridTemplate,
  }

  const randomImages = (_, ind) => {
    // will be passed to a map but will be ignored
    const randInd = Math.floor(Math.random() * HEX_ARRAY.length)
    const randHex = HEX_ARRAY[randInd]
    const constructURL = `${TEST_URL}/${IMAGE_SIZE_PX}/${randHex}`
    return (
      <img key={ind} style={imageStyle} src={constructURL}/>
    )
  }

  return (
    <>
      <h1>These are the images</h1>
      <div style={containerStyle} className="images">
        {[...new Array(IMAGE_SIDE_COUNT ** 2)].map(randomImages)}
      </div>
    </>
  )
}

export default Images