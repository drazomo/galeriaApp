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
import { fetchUserCollection } from '../features/userCollection'
import { fetchUserData, UnsplashUsrDataProps } from '../features/userFeed'
import { fetchUserFotos, nextPage } from '../features/userPhotosFeed'

const loop = [1,2,3,4,5,6,7,8]

interface ParamsInterface {
  username: string
}

const User = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(state => state.userFeed)
  const { data: userFotos, page } = useAppSelector(state => state.userPhotosFeed)
  const { data: userCollections, page: collectionPage } = useAppSelector(state => state.userCollection)
  const { username } = useParams<keyof ParamsInterface>() as ParamsInterface

  useEffect(() => {
    if(page !== 1){
      dispatch(fetchUserFotos({page, user: username}))
    }
  }, [page])

  useEffect(() => {
    dispatch(fetchUserData(username))
    dispatch(fetchUserFotos({page: 1, user: username}))
    dispatch(fetchUserCollection({page: collectionPage, user: username}))
  }, [])

  console.log(userCollections)

  const nextFn = async () => {
    dispatch(nextPage())
  }

  return (
    <>
    <Container>
      <ImgAndUser item={data as UnsplashUsrDataProps}/>
      <ContainerFlexContainer>
        {(userCollections as UnsplashDataProps[]).map(item => (
          <UserAlbum item={item}/>
        ))}
      </ContainerFlexContainer>
    </Container>
    <Container style={{marginBottom: '2em'}}>
    <InfiniteScroll 
      dataLength={(userFotos as UnsplashDataProps[])?.length} 
      next={nextFn} 
      hasMore={(userFotos as UnsplashDataProps[]).length < data.total_photos} 
      loader={<></>}
    >
      <Grid>
        {(userFotos as UnsplashDataProps[]).map(foto => (
          <ExploreImage key={`${foto.id}_gridFoto`} item={foto} grid/>
        ))}
      </Grid>
    </InfiniteScroll>
    </Container>
    </>
  )
}

export default User