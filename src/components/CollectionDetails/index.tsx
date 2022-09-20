import React from 'react'
import { Button } from '../Button/Button.styled'
import { CollectionDetailsContainer, CollectionImg, CollectionInfoBx, PostsText } from './CollectionDetails.styled'

const CollectionDetails = () => {
  return (
    <CollectionDetailsContainer>
      <CollectionImg src='' />
      <CollectionInfoBx>
        <h2>#Cars</h2>
        <p>Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how</p>
        <PostsText>80.533.3564 Posts</PostsText>
        <Button>Follow</Button>
      </CollectionInfoBx>
    </CollectionDetailsContainer>
  )
}

export default CollectionDetails