import React, { FormEvent, useRef } from 'react'
import './Form.css'

const Form = () => {

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (inputRef.current !== null) {
      console.log(inputRef.current.value)
    }
  }
  return (
    <>
      <div >
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="todo">Add something to your to do list: </label><br />
          <input type="text" ref={inputRef}/>
          <button type="submit">Add to List</button>
        </form>
      </div>
    </>
  )
}

export default Form
