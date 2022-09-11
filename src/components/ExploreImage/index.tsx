import React, { useState } from 'react'
import { UnsplashDataProps } from '../../features/feed'
import LrgCollectionCard from '../LrgCollectionCard/LrgCollectionCard'
import { defaultImageCSS, ImgArea, ImgGridArea } from '../LrgCollectionCard/LrgCollectionCard.styled'
import PicModal from '../PicModal/PicModal'

interface ExploreImageProps {
  item: UnsplashDataProps
  restrict?: boolean
  grid?: boolean
}

const ExploreImage = ({item, restrict, grid}:ExploreImageProps) => {
  const [modalOpen, setModalOpen] = useState(false)

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <PicModal key={item.id} item={item} onClose={closeModal} open={modalOpen}/>
    <LrgCollectionCard key={item.id} item={item} >
      {grid 
      ? 
      <ImgGridArea 
        src={item.urls.regular}
        alt={item.description}
        onClick={showModal}
        imageCSS={defaultImageCSS}
      />
      :
      <ImgArea 
        src={item.urls.regular} 
        alt={item.description}
        onClick={showModal}
        imageCSS={defaultImageCSS}
      />}
    </LrgCollectionCard>
    </>
  )
}

export default ExploreImage