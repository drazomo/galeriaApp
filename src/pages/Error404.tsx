import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button/Button.styled'
import { Container } from '../components/ExploreImage/ExploreImage.styled'

const Error404 = () => {
  return (
    <Container style={{marginTop: '2em'}}>
      <h1>Error 404</h1>
      <h4>Page not found</h4>
      <Link to='/'>
        <Button style={{marginTop: '2em'}}>Go Home</Button>
      </Link>
    </Container>
  )
}

export default Error404