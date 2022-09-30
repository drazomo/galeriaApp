import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchFotos, nextPage, UnsplashDataProps } from '../features/feed'
import { CollectionCardProps, fetchShowcaseFeed } from '../features/showcaseFeed'
import { CardCollectionContainer } from '../components/Collection/Collection.styled'
import CollectionCard from '../components/Collection/CollectionCards'
import ExploreImage from '../components/ExploreImage'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'

const Collections = () => {
  const ref = React.createRef<LoadingBarRef>()
  const dispatch = useAppDispatch()
  const {data, page, isLoading} = useAppSelector(state => state.feed)
  const {data: showcase, isLoading: showcaseIsLoading} = useAppSelector(state => state.showcaseFeed)

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
  }, [isLoading, showcaseIsLoading])

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
    <CardCollectionContainer>
    {
      (showcase as CollectionCardProps[]).map(({title, id, preview_photos}: CollectionCardProps) => (
        <CollectionCard id={id} catName={title} imgUrl={preview_photos[0].urls.regular} key={`collection_${id}`}/>
      ))
    }
    </CardCollectionContainer>
      
    <InfiniteScroll dataLength={(data as UnsplashDataProps[])?.length} next={nextFn} hasMore={true} loader={<></>}>
      {
        (data as UnsplashDataProps[])?.map((imgData) => {
          return (
            <ExploreImage
              key={imgData.id} 
              item={imgData}
            />
        )}
      )}
    </InfiniteScroll>
    </>
    )
  }

export default Collections