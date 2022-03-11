import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import StudentAPI from '../api/StudentAPI'


export default function CreateStudent() {
  const [Name, setName] = useState()
  const [Email, setEmail] = useState()
  const [Roll, setRoll] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {name:Name,email:Email,roll:Roll}
    console.log(data)
    StudentAPI.createStudent(data)

    setName('')
    setEmail('')
    setRoll('')
  }

  return (
    <div className="form-wrapper mt-5">
      <h1>Create Student {process.env.REACT_APP_APP_NAME}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={Name} onChange={e => { setName(e.target.value) }} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={Email} onChange={e => { setEmail(e.target.value) }} />
        </Form.Group>
        <Form.Group controlId="Roll">
          <Form.Label>Roll No.</ Form.Label>
          <Form.Control type="text" placeholder="Enter Roll No." value={Roll} onChange={e => { setRoll(e.target.value) }} />
        </Form.Group>
        <Button variant="success" type="submit" size='lg' block="block" onClick={handleSubmit} >Create</Button>
      </Form>
    </div>

  )
}
