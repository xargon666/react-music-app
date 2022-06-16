// React Imports
import React, { useState } from 'react'

// Bootstrap Imports
import { default as Container } from 'react-bootstrap/Container'
import { default as Button } from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = () => {

  const [ username, setUsername ] = useState("");
  const [ nameInput, setNameInput ] = useState("");

  const handleInput = e => setNameInput(e.target.value);
  
  const handleFormEvent = e => {
    e.preventDefault()
    e.stopPropagation()
    setUsername(nameInput)
    setNameInput("")
  }

  return (
    <Container>
      <h3 aria-label="greeting" 
      id="greeting"
        >Welcome {username ? username : 'New Person'}!
      </h3>
      
      <form onSubmit={handleFormEvent} className="p-3">
        <label htmlFor="username">Enter Username</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          placeholder="Type here..."
          value={nameInput}
          onChange={handleInput}/>
        <Button 
          type="submit"
          >Submit
        </Button>
      </form>
    </Container>
  )
}

export default Form
