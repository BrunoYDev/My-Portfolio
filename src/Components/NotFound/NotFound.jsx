import { useState } from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom'

function NotFound() {

  return (
    <>
      <Container>
        <h1>THIS PAGE <span>DOESN'T EXIST</span> - 404 <span>NOT FOUND</span></h1>

        <Link to="/"><button>HOME</button></Link>
      </Container>
    </>
  )
}

export default NotFound
