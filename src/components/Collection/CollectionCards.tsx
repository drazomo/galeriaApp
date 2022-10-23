import React from 'react'
import { CardBase, CardTitle } from './Collection.styled'

interface CollectionCardProps {
  catName: string
  imgUrl: string
  id: string
  color?: string
  className?: string
}

const CollectionCard = ({catName, imgUrl, id, color, className}: CollectionCardProps) => {

  return (
    <a href={`/collection/${id}`}>
      <CardBase className={className} style={{backgroundImage: `url("${imgUrl}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: `${color}`}}>
        <CardTitle>{catName}</CardTitle>
      </CardBase>
    </a>
  )
}

export default CollectionCard