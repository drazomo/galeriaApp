import React, { useEffect, useState } from 'react'
import { CardCollectionContainer } from './Collection/Collection.styled'
import CollectionCard from './Collection/CollectionCards'
import LrgCollectionCard from './LrgCollectionCard/LrgCollectionCard'

interface CollectionCardProps {
  title: string
  id: string
  preview_photos: any
}

interface UnsplashDataProps {
  urls: {
    regular: string
  },
  links: {
    self: string,
    download: string
  },
  description?: string,
  likes: number,
  user: {
    username: string,
    profile_image: {
      large: string
    }
  },
  id: string,
}

const Collections = () => {
  const [data, setData] = useState([])
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res =  await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=1&per_page=5`)
      const data = await res.json()
      setPhotoData(data)
    }
  
    fetchData()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res =  await fetch(`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=1&per_page=5`)
      const data = await res.json()
      setData(data)
    }

    fetchData()
  }, []);

  console.log(photoData);

  return (
    <>
    <CardCollectionContainer>
    {
      data?.map(({title, id, preview_photos}: CollectionCardProps) => (
        <CollectionCard catName={title} imgUrl={preview_photos[0].urls.regular} key={`collection_${id}`}/>
      ))
    }
  </CardCollectionContainer>
  {
    photoData.map(({description, likes, urls, links, user, id}: UnsplashDataProps) => (
      <LrgCollectionCard perfilImgUrl={user.profile_image.large} likes={likes} profileLink={links.self} user={user.username} description={description} id={id} key={id}>
        <img src={urls.regular} alt={description} />
      </LrgCollectionCard>
    ))
  }
  </>
  )
}

export default Collections