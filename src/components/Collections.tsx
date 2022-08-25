import React, { useEffect, useState } from 'react'
import { CardCollectionContainer } from './Collection/Collection.styled'
import CollectionCard from './Collection/CollectionCards'
interface CollectionCardProps {
  title: string
  id: string
  preview_photos: any
}

const Collections = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res =  await fetch(`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=1&per_page=5`)
      const data = await res.json()
      setData(data)
    }

    fetchData()
  }, []);

  console.log(data);

  return (
    <>
    <CardCollectionContainer>
    {
      data?.map(({title, id, preview_photos}: CollectionCardProps) => (
        <CollectionCard catName={title} imgUrl={preview_photos[0].urls.regular} key={`collection_${id}`}/>
      ))
    }
  </CardCollectionContainer></>
  )
}

export default Collections