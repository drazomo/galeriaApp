import React from 'react'
import { CardBase, CardTitle } from './Collection.styled'

interface CollectionCardProps {
  catName: string
  imgUrl: string
}

const CollectionCard = ({catName, imgUrl}: CollectionCardProps) => {
  return (
    <CardBase style={{backgroundImage: `url("${imgUrl}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      <CardTitle>{catName}</CardTitle>
    </CardBase>
  )
}

export default CollectionCard