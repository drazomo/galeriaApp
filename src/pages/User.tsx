import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import ExploreImage from '../components/ExploreImage'
import ImgAndUser from '../components/ImgAndUser'
import { Grid } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { Container } from '../components/User/User.styled'
import UserAlbum from '../components/UserAlbum'
import { ContainerFlexContainer } from '../components/UserAlbum/UserAlbum.styled'
import { UnsplashDataProps } from '../features/feed'
import { fetchUserData, UnsplashUsrDataProps } from '../features/userFeed'
import { fetchUserFotos } from '../features/userPhotosFeed'

const loop = [1,2,3,4,5,6,7,8]

const User = () => {
  const dispatch = useAppDispatch()
  const {data, page} = useAppSelector(state => state.userFeed)
  const {data: userFotos} = useAppSelector(state => state.userPhotosFeed)

  useEffect(() => {
    dispatch(fetchUserData())
    dispatch(fetchUserFotos(page))
  }, []);

  const nextFn = async () => {
    dispatch(fetchUserFotos(page))
  }

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
    <InfiniteScroll dataLength={(userFotos as UnsplashDataProps[])?.length} next={nextFn} hasMore={true} loader={<></>}>
      <Grid>
        {(userFotos as UnsplashDataProps[]).map(foto => (
          <ExploreImage item={foto} grid key={`gridIMG_${foto.id}`}/>
        ))}
      </Grid>
    </InfiniteScroll>
    </Container>
    </>
  )
}

export default User