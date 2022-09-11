import React from 'react'
import ImgAndUser from '../components/ImgAndUser'
import { Grid, ImgGridArea } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { Container } from '../components/User/User.styled'
import UserAlbum from '../components/UserAlbum'

const loop = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19]

const User = () => {
  return (
    <>
    <Container>
      <ImgAndUser />
      <UserAlbum />
    </Container>
    <Container>
      <Grid>
        {loop.map(user => (
          <ImgGridArea />
        ))}
      </Grid>
      
    </Container>
    </>
  )
}

export default User