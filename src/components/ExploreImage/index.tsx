import React, { useState } from 'react'
import { UnsplashDataProps } from '../../features/feed'
import LrgCollectionCard from '../LrgCollectionCard/LrgCollectionCard'
import { defaultImageCSS, ImgArea, ImgGridArea, ImgGridDiv, Overlay, portraitImageCSS } from '../LrgCollectionCard/LrgCollectionCard.styled'
import PicModal from '../PicModal/PicModal'

interface ExploreImageProps {
  item: UnsplashDataProps
  grid?: boolean
  hover?: boolean
  portrait?: boolean
  imageCSS?: {}
}

const ExploreImage = ({item, grid, hover, imageCSS, portrait}:ExploreImageProps) => {
  const [modalOpen, setModalOpen] = useState(false)

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <PicModal 
      key={item.id} 
      item={item} 
      onClose={closeModal} 
      open={modalOpen}
    />
    {
    grid 
      ? 
      <ImgGridDiv hoverEffect={hover}>
        <Overlay>
          <p>
            {item.likes} likes
          </p>
        </Overlay>
        <ImgGridArea 
          src={item.urls.regular}
          alt={item.description}
          onClick={showModal}
          imageCSS={{objectFit: 'cover'}}
        />
      </ImgGridDiv>
      :
    <LrgCollectionCard key={item.id} item={item}>
      <ImgArea 
        src={item.urls.regular} 
        alt={item.description}
        onClick={showModal}
        imageCSS={portrait ? portraitImageCSS : defaultImageCSS}
      />
    </LrgCollectionCard>
    }
    </>
  )
}

export default ExploreImage