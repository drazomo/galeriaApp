import React, { useState } from 'react'
import { UnsplashDataProps } from '../../features/feed'
import LrgCollectionCard from '../LrgCollectionCard/LrgCollectionCard'
import PicModal from '../PicModal/PicModal'

interface ExploreImageProps {
  item: UnsplashDataProps
}

const ExploreImage = ({item}:ExploreImageProps) => {
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
    <LrgCollectionCard key={item.id} item={item}>
      <img src={item.urls.regular} alt={item.description} onClick={showModal}/>
    </LrgCollectionCard>
    </>
  )
}

export default ExploreImage