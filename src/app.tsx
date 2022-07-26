import React from 'react'
import { CardCollectionContainer } from './components/Collection/Collection.styled'
import CollectionCard from './components/Collection/CollectionCards'

const tester = ['add collection', 'cars', 'sports', 'vacations', 'food']

const App = () => {
  return (
    <>
      <CardCollectionContainer>
        {
          tester.map((cat) => (
            <CollectionCard catName={cat}/>
          ))
        }
      </CardCollectionContainer>
    </>
  )
}

export default App