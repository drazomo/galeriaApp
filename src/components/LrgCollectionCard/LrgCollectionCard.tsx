import React from 'react'
import {Heart} from 'react-iconly'
import { CollectionButtonBar, CollectionCardContainer } from './LrgCollectionCard.styled'

interface LrgCollectionCardProps {
  children: React.ReactNode
}

const LrgCollectionCard = ({children}: LrgCollectionCardProps) => {
  return (
    <CollectionCardContainer>
    {children}
    <CollectionButtonBar>
    
    </CollectionButtonBar>
    </CollectionCardContainer>
  )
}

export default LrgCollectionCard