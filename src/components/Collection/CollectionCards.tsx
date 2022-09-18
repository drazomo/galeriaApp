import React from 'react'
import { CardBase, CardTitle } from './Collection.styled'

interface CollectionCardProps {
  catName: string
  imgUrl: string
  id: string
}

const CollectionCard = ({catName, imgUrl, id}: CollectionCardProps) => {
  return (
    <a href={`collection/${id}`}>
      <CardBase style={{backgroundImage: `url("${imgUrl}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <CardTitle>{catName}</CardTitle>
      </CardBase>
    </a>
  )
}

export default CollectionCard