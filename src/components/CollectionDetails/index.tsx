import React, { useState } from 'react'
import { UnsplashDataProps } from '../../features/feed'
import { Button } from '../Button/Button.styled'
import { CollectionDetailsContainer, CollectionImg, CollectionInfoBx, PostsText } from './CollectionDetails.styled'

interface CollectionInterface {
  item: UnsplashDataProps
}

const CollectionDetails = ({item}: CollectionInterface) => {
  const [ followed, setFollowed ] = useState(false)

  const handleOnClick = () => {
    setFollowed(prevState => !prevState)
  }

  return (
    <CollectionDetailsContainer key={`${item.id}_collectionDetails`}>
      <CollectionImg src={item.cover_photo?.urls.regular} />
      <CollectionInfoBx>
        <h2>#{item.title}</h2>
        <p>{item.description}</p>
        <PostsText>{item.total_photos} Posts</PostsText>
        <Button onClick={handleOnClick}>{followed ? 'Unfollowed' : 'Follow'}</Button>
      </CollectionInfoBx>
    </CollectionDetailsContainer>
  )
}

export default CollectionDetails