import React from 'react'
import { CardCollectionContainer } from './Collection/Collection.styled'
import CollectionCard from './Collection/CollectionCards'

const tester = ['add collection', 'cars', 'sports', 'vacations', 'food']

const Collections = () => {
  return (
    <>
    <CardCollectionContainer>
    {
      tester.map((cat) => (
        <CollectionCard catName={cat} key={`collection_${cat}`}/>
      ))
    }
  </CardCollectionContainer></>
  )
}

export default Collections