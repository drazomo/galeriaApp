import React from 'react'
import ReactDOM from 'react-dom'
import { UnsplashDataProps } from '../../features/feed'
import LrgCollectionCard from '../LrgCollectionCard/LrgCollectionCard'
import { ModalBkg, ModalContainer, ModalImg } from './PicModal.styled'

interface PicModalProps {
  onClose: () => void
  open: boolean
  item: UnsplashDataProps
}

const PicModal = ({onClose, open, item}: PicModalProps) => {

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
    <ModalBkg onClick={onClose}/>
    <ModalContainer>
    <LrgCollectionCard item={item} download key={`modal_${item.id}`}>
      <ModalImg src={item.urls.regular} alt={item.description}/>
    </LrgCollectionCard>
    </ModalContainer>
    </>,
    document.getElementById('modal') as Element
  )
}

export default PicModal