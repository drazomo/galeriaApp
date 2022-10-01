import React from 'react'
import { CardBase, CardTitle } from './Collection.styled'

interface CollectionCardProps {
  catName: string
  imgUrl: string
  id: string
  color?: string
}

const CollectionCard = ({catName, imgUrl, id, color}: CollectionCardProps) => {

  return (
    <a href={`collection/${id}`}>
      <CardBase style={{backgroundImage: `url("${imgUrl}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: `${color}`}}>
        <CardTitle>{catName}</CardTitle>
      </CardBase>
    </a>
  )
}

export default CollectionCard