import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
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

interface ParamsInterface {
  username: string
}

const User = () => {
  const dispatch = useAppDispatch()
  const { data, page } = useAppSelector(state => state.userFeed)
  const { data: userFotos } = useAppSelector(state => state.userPhotosFeed)
  const { username } = useParams<keyof ParamsInterface>() as ParamsInterface;

  console.log(`user: ${username}`)

  useEffect(() => {
    dispatch(fetchUserData())
    dispatch(fetchUserFotos({page, user: username}))
  }, []);

  const nextFn = async () => {
    dispatch(fetchUserFotos({page, user: username}))
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
    <Container style={{marginBottom: '2em'}}>
    <InfiniteScroll 
      dataLength={(userFotos as UnsplashDataProps[])?.length} 
      next={nextFn} 
      hasMore={(userFotos as UnsplashDataProps[])?.length < data.total_photos} 
      loader={<></>}
    >
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