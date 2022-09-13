import { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchFotos, nextPage, UnsplashDataProps } from '../features/feed'
import { CollectionCardProps, fetchShowcaseFeed } from '../features/showcaseFeed'
import { CardCollectionContainer } from '../components/Collection/Collection.styled'
import CollectionCard from '../components/Collection/CollectionCards'
import ExploreImage from '../components/ExploreImage'

const Collections = () => {
  const dispatch = useAppDispatch()
  const {data, page} = useAppSelector(state => state.feed)
  const {data: showcase} = useAppSelector(state => state.showcaseFeed)

  useEffect(() => {
    dispatch(fetchShowcaseFeed())
    dispatch(fetchFotos(page))
  }, [])

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
    <CardCollectionContainer>
    {
      (showcase as CollectionCardProps[]).map(({title, id, preview_photos}: CollectionCardProps) => (
        <CollectionCard catName={title} imgUrl={preview_photos[0].urls.regular} key={`collection_${id}`}/>
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