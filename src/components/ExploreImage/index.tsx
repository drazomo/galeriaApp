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

  return (
    <>
    <PicModal key={item.id} item={item} onClose={closeModal} open={modalOpen}/>
    <LrgCollectionCard key={item.id} item={item} portrait={item.width < item.height}>
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