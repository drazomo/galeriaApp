import React from 'react'
import { AlbumCover, AlbumContainer } from './UserAlbum.styled'

const UserAlbum = () => {
  return (
      <AlbumContainer>
        <AlbumCover />
        <p>New Forest National Park in Autumn</p>
      </AlbumContainer>
  )
}

export default UserAlbum