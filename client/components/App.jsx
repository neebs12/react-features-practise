import React, { useState } from 'react'

const useField = (type) => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const App = () => {
  const name = useField('text')
  const date = useField('date')
  const height = useField('number')
  const ethnicity = useField('text')

  const [isSubmitting, setIsSubmitting] = useState(false) // <--- init state
  const [toggleShow, setToggleShow] = useState(false) // <-- initially hidden

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // submit to the server?
    if (!isSubmitting) return false

    console.log(`name: ${name.value}, date: ${date.value}` + 
      (toggleShow ? `\n height: ${height.value}, ethnicity: ${ethnicity.value}`: ``)
    )
  }

  const extraFields = () => {
    // add your extra field here
    return (
      <>
        height: <input {...height} /><br />
        ethnicity: <input {...ethnicity} /><br />
      </>
    )
  }

  return (
    <form onSubmit={handleOnSubmit}>
      name: <input {...name} /><br />
      date: <input {...date} /><br />
      {toggleShow && extraFields()} 
      <button onClick={() => {
        setToggleShow(s => !s)
        setIsSubmitting(false)
      }}>
        {toggleShow ? "hide extra" : "show extra"}
      </button><br />
      <button type="submit" onClick={() => setIsSubmitting(true)}>
        submit
      </button>
    </form>
  )
}

export default App
