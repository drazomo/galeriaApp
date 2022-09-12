import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import ExploreImage from '../components/ExploreImage'
import ImgAndUser from '../components/ImgAndUser'
import { Grid, ImgGridArea } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { Container } from '../components/User/User.styled'
import UserAlbum from '../components/UserAlbum'
import { ContainerFlexContainer } from '../components/UserAlbum/UserAlbum.styled'
import { UnsplashDataProps } from '../features/feed'
import { fetchUserData, UnsplashUsrDataProps } from '../features/userFeed'
import { fetchUserFotos, nextPage } from '../features/userPhotosFeed'

const loop = [1,2,3,4,5,6,7,8]

const User = () => {
  const dispatch = useAppDispatch()
  const {data} = useAppSelector(state => state.userFeed)
  const {data: userFotos, page} = useAppSelector(state => state.userPhotosFeed)

  const fetchMoreUsrFotos = () => {
    dispatch(nextPage());
    dispatch(fetchUserFotos(page))
  }

  useEffect(() => {
    dispatch(fetchUserData())
    fetchMoreUsrFotos()
  }, []);

  console.log(userFotos);

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
        {(userFotos as UnsplashDataProps[]).map(foto => (
          <ExploreImage item={foto} grid/>
        ))}
      </Grid>
      
    </Container>
    </>
  )
}

export default User