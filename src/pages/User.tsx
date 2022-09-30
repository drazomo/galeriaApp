import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import ExploreImage from '../components/ExploreImage'
import ImgAndUser from '../components/ImgAndUser'
import { Grid } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { Container } from '../components/ExploreImage/ExploreImage.styled'
import UserAlbum from '../components/UserAlbum'
import { ContainerFlexContainer } from '../components/UserAlbum/UserAlbum.styled'
import { UnsplashDataProps } from '../features/feed'
import { fetchUserCollection } from '../features/userCollection'
import { fetchUserData, UnsplashUsrDataProps } from '../features/userFeed'
import { fetchUserFotos, nextPage } from '../features/userPhotosFeed'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'
import Loader from '../components/Loader'

interface ParamsInterface {
  username: string
}

const User = () => {
  const ref = React.createRef<LoadingBarRef>()
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(state => state.userFeed)
  const { data: userFotos, page, isLoading: fotosIsLoading, hasError } = useAppSelector(state => state.userPhotosFeed)
  const { data: userCollections, page: collectionPage, isLoading: collectionIsLoading, hasError: collectionHasError } = useAppSelector(state => state.userCollection)
  const { username } = useParams<keyof ParamsInterface>() as ParamsInterface
  const hasUserFotosFinishLoading = !!(userFotos as UnsplashDataProps[]).length && !hasError
  const hasUserCollectionsFinishLoading = !!(userCollections as UnsplashDataProps[]).length && !collectionHasError

  useEffect(() => {
    if(page !== 1){
      dispatch(fetchUserFotos({page, user: username}))
    }
  }, [page])

  useEffect(() => {
    const loadingBar = ref.current
    if(loadingBar) {
      (fotosIsLoading || collectionIsLoading) ? loadingBar.continuousStart() : loadingBar.complete()
    }

    return () => {
      (loadingBar as LoadingBarRef).complete()
    }
  }, [fotosIsLoading, collectionIsLoading, ref])

  useEffect(() => {
    dispatch(fetchUserData(username))
    dispatch(fetchUserFotos({page: 1, user: username}))
    dispatch(fetchUserCollection({page: collectionPage, user: username}))
  }, [])


  const nextFn = async () => {
    dispatch(nextPage())
  }

  return (
    <>
    <LoadingBar color='#f11946' ref={ref} shadow={true} />
    <Container>
      <ImgAndUser item={data as UnsplashUsrDataProps}/>
    {hasUserCollectionsFinishLoading && (
      <ContainerFlexContainer>
        {(userCollections as UnsplashDataProps[]).map(item => (
          <UserAlbum item={item}/>
        ))}
      </ContainerFlexContainer>
    )}
    {collectionIsLoading && <Loader />}
    </Container>
    {hasUserFotosFinishLoading && (
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
    )}
    {fotosIsLoading && <Loader />}
    </>
  )
}

export default User