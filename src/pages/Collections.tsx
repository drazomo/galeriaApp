import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchFotos, nextPage, UnsplashDataProps } from '../features/feed'
import { CollectionCardProps, fetchShowcaseFeed } from '../features/showcaseFeed'
import { CardCollectionContainer } from '../components/Collection/Collection.styled'
import CollectionCard from '../components/Collection/CollectionCards'
import ExploreImage from '../components/ExploreImage'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'

const Collections = () => {
  const ref = React.createRef<LoadingBarRef>()
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const {data, page, isLoading, hasError} = useAppSelector(state => state.feed)
  const {data: showcase, isLoading: showcaseIsLoading, hasError: showcaseHasError} = useAppSelector(state => state.showcaseFeed)
  const showcaseHasData = !!showcase.length && !showcaseHasError
  const hasLoadingFeedFinish = !!(data as UnsplashDataProps[]).length && !hasError



  useEffect(() => {
    dispatch(fetchFotos(page))
    dispatch(fetchShowcaseFeed())
  }, [])

  useEffect(() => {
    const loadingBar = ref.current
    if(loadingBar) {
      (isLoading || showcaseIsLoading) ? loadingBar.continuousStart() : loadingBar.complete()
    }

    return () => {
      (loadingBar as LoadingBarRef).complete()
    }
  }, [isLoading, ref, showcaseIsLoading])

  useEffect(() => {
    if(page !== 1){
      dispatch(fetchFotos(page))
    }
  }, [page])

  const nextFn = async () => {
    dispatch(nextPage())
  };


  return (
    <>
    <LoadingBar color='#f11946' ref={ref} shadow={true} />
    {showcaseIsLoading && <Loader />}
    <CardCollectionContainer>
    {showcaseHasData && (
      showcase as CollectionCardProps[]).map(({title, id, preview_photos, cover_photo}: CollectionCardProps) => (
        <CollectionCard id={id} catName={title} imgUrl={preview_photos[0].urls.regular} key={`${id}_collections${Math.random()}`} color={cover_photo?.color}/>
      )
    )}
    </CardCollectionContainer>
      
    {hasLoadingFeedFinish && (
      <InfiniteScroll dataLength={(data as UnsplashDataProps[])?.length} next={nextFn} hasMore={true} loader={<></>}>
      {(data as UnsplashDataProps[])?.map((imgData) => {
          return (
            <ExploreImage
              key={`${imgData.id}_XplrImg_${Math.random()}`} 
              item={imgData}
              portrait={imgData.width < imgData.height}
            />
        )}
      )}
    </InfiniteScroll>
    )}
    {isLoading && <Loader />}
    {hasError && nav('/error')}
    </>
    )
  }

export default Collections