import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchFotos, nextPage } from '../features/feed'
import { CollectionCardProps, fetchShowcaseFeed } from '../features/showcaseFeed'
import { CardCollectionContainer } from '../components/Collection/Collection.styled'
import CollectionCard from '../components/Collection/CollectionCards'
import LrgCollectionCard from '../components/LrgCollectionCard/LrgCollectionCard'
import PicModal from '../components/PicModal/PicModal'
import ExploreImage from '../components/ExploreImage'

const Collections = () => {
  const dispatch = useAppDispatch()
  const {data, page} = useAppSelector(state => state.feed)
  const {data: showcase} = useAppSelector(state => state.showcaseFeed)

  useEffect(() => {
    fetchImages()
    dispatch(fetchShowcaseFeed())
  }, []);


  const fetchImages = async () => {
    dispatch(nextPage())
    dispatch(fetchFotos(page))
  }


  return (
    <>
    <CardCollectionContainer>
    {
      showcase.map(({title, id, preview_photos}: CollectionCardProps) => (
        <CollectionCard catName={title} imgUrl={preview_photos[0].urls.regular} key={`collection_${id}`}/>
      ))
    }
  </CardCollectionContainer>
    
  <InfiniteScroll dataLength={data?.length} next={fetchImages} hasMore={true} loader={<></>}>
    {
      data?.map((imgData) => {
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