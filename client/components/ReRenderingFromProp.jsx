import React, {useState} from 'react'

function ReRenderingFromProp(props) {
  const [forceRerender, setForceRerender] = useState(false)
  console.log('Child rendering')
  return (
    <>
      <h1>This is from a child component:{props.count}</h1>
      <button onClick={() => setForceRerender(!forceRerender)}>re-render child!</button>
    </>
  )
}

export default ReRenderingFromProp