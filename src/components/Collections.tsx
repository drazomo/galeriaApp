import { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchFotos, nextPage, UnsplashDataProps } from '../features/feed'
import { CollectionCardProps, fetchShowcaseFeed } from '../features/showcaseFeed'
import { CardCollectionContainer } from './Collection/Collection.styled'
import CollectionCard from './Collection/CollectionCards'
import LrgCollectionCard from './LrgCollectionCard/LrgCollectionCard'

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
      data?.map(({description, likes, urls, links, user, id}: UnsplashDataProps) => (
        <LrgCollectionCard perfilImgUrl={user.profile_image.large} likes={likes} profileLink={links.self} user={user.username} description={description} id={id} key={id}>
          <img src={urls.regular} alt={description} />
        </LrgCollectionCard>
      ))
    }
  </InfiniteScroll>
  
  </>
  )
}

export default Collections