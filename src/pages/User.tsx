import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import ImgAndUser from '../components/ImgAndUser'
import { Grid, ImgGridArea } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { Container } from '../components/User/User.styled'
import UserAlbum from '../components/UserAlbum'
import { ContainerFlexContainer } from '../components/UserAlbum/UserAlbum.styled'
import { fetchUserData, UnsplashUsrDataProps } from '../features/userFeed'

const loop = [1,2,3,4,5,6,7,8]

const User = () => {
  const dispatch = useAppDispatch()
  const {data} = useAppSelector(state => state.userFeed) 

  useEffect(() => {
    dispatch(fetchUserData())
  }, []);

  console.log(data);

  return (
    <>
    <Container>
      <ImgAndUser item={data as UnsplashUsrDataProps}/>
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