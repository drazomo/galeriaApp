import React from 'react'
import { AlbumCover, Container, AlbumContainer } from './UserAlbum.styled'

const UserAlbum = () => {
  return (
    <Container>
      <AlbumContainer>
        <AlbumCover />
        <p>New Forest National Park in Autumn</p>
      </AlbumContainer>
    </Container>
  )
}

export default UserAlbum