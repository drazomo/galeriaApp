import React from 'react'
import ImgAndUser from '../components/ImgAndUser'
import { Grid, ImgGridArea } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { Container } from '../components/User/User.styled'
import UserAlbum from '../components/UserAlbum'
import { ContainerFlexContainer } from '../components/UserAlbum/UserAlbum.styled'

const loop = [1,2,3,4,5,6,7,8]

const User = () => {
  return (
    <>
    <Container>
      <ImgAndUser />
      <ContainerFlexContainer>
        {loop.map(user => (
          <UserAlbum />
        ))}
      </ContainerFlexContainer>
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