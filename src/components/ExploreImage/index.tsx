import React, { useState } from 'react'
import { UnsplashDataProps } from '../../features/feed'
import LrgCollectionCard from '../LrgCollectionCard/LrgCollectionCard'
import { defaultImageCSS, ImgArea, portraitImageCSS } from '../LrgCollectionCard/LrgCollectionCard.styled'
import PicModal from '../PicModal/PicModal'

interface ExploreImageProps {
  item: UnsplashDataProps
  portrait?: boolean
}

const ExploreImage = ({item, portrait}:ExploreImageProps) => {
  const [modalOpen, setModalOpen] = useState(false)

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalDetailsClick = () => {
    setModalOpen(false);
  }

  const handleDetailsClick = () => {
    setModalOpen(true);
  }

  return (
    <>
    <PicModal key={item.id} item={item} onClose={closeModal} open={modalOpen} onDetailsClick={handleModalDetailsClick}/>
    <LrgCollectionCard key={item.id} item={item} portrait={item.width < item.height} onDetailsClick={handleDetailsClick}>
      <ImgArea 
        src={item.urls.regular} 
        alt={item.description}
        onClick={showModal}
        imageCSS={portrait ? portraitImageCSS : defaultImageCSS}
      />
    </LrgCollectionCard>
    </>
  )
}

export default ExploreImage