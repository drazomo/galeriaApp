import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchSavedCollections, removeCollection, saveCollection } from '../../features/clientSaved'
import { UnsplashDataProps } from '../../features/feed'
import { collectionExistInLocalStorage } from '../../utils'
import { Button } from '../Button/Button.styled'
import { CollectionDetailsContainer, CollectionImg, CollectionInfoBx, PostsText } from './CollectionDetails.styled'

interface CollectionInterface {
  item: UnsplashDataProps
}

const CollectionDetails = ({item}: CollectionInterface) => {
  const dispatch = useAppDispatch()
  const [ followed, setFollowed ] = useState(false)

  const handleOnClick = (collection: UnsplashDataProps) => {
    setFollowed(prevState => !prevState)
    followed ? dispatch(removeCollection(collection.id)) : dispatch(saveCollection(collection))
  }

  useEffect(() => {
    dispatch(fetchSavedCollections())
    setFollowed(collectionExistInLocalStorage(item.id))
  }, [followed, item.id])

  return (
    <CollectionDetailsContainer key={`${item.id}_collectionDetails`}>
      <CollectionImg src={item.cover_photo?.urls.regular} />
      <CollectionInfoBx>
        <h2>#{item.title}</h2>
        <p>{item.description}</p>
        <PostsText>{item.total_photos} Posts</PostsText>
        <Button onClick={() => handleOnClick(item)}>{followed ? 'Unfollow' : 'Follow'}</Button>
      </CollectionInfoBx>
    </CollectionDetailsContainer>
  )
}

export default CollectionDetails