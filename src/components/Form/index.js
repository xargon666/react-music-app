// React Imports
import React, { useState } from 'react'

// Bootstrap Imports
import { default as Button } from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {default as Container} from 'react-bootstrap/Container'

const myForm = () => {

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
    <Container variant="dark">
      <Form onSubmit={handleFormEvent}>
        <span 
        aria-label="greeting" 
        id="greeting"
        className="fs-3"
          >Welcome {username ? username : 'New Person'}!
        </span>


        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">User Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter username"  
            id="username" 
            name="username" 
            value={nameInput}
            onChange={handleInput}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default myForm


/*




<Form>
      <span 
      aria-label="greeting" 
      id="greeting"
      className="fs-3"
        >Welcome {username ? username : 'New Person'}!
      </span>
      
      <form onSubmit={handleFormEvent} className="p-3">
        <label htmlFor="username">Enter Username</label>
        <input 
          type="text" 
          placeholder="Type here..."
          id="username" 
          name="username" 
          value={nameInput}
          onChange={handleInput}/>
        <Button 
          type="submit"
          >Submit
        </Button>
      </form>
    </Form>
*/
