import React from 'react'
import { CardBase, CardTitle } from './Collection.styled'

interface CollectionCardProps {
  catName: string;
}

const CollectionCard = ({catName}: CollectionCardProps) => {
  return (
    <CardBase>
      <CardTitle>{catName}</CardTitle>
    </CardBase>
  )
}

export default CollectionCard