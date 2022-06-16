import React, {useState} from 'react'

const Form = () => {

  const [username,setUsername] = useState("")

  const formEvent = e => {
    e.preventDefault()
    e.stopPropagation()
    setUsername()
  }

  return (
    <Form>
      <h2>Hi there {username ? username : 'friend'}!</h2>
      <label for="username"></label>
      <input key="form-name" type="text" id="username"></input>
      <input type="submit" onClick={formEvent()}/>
    </Form>
  )
}

export default Form
