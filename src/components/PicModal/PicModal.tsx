import React from 'react'
import ReactDOM from 'react-dom'
import { UnsplashDataProps } from '../../features/feed'
import LrgCollectionCard from '../LrgCollectionCard/LrgCollectionCard'
import { ModalBkg, ModalContainer, ModalImgArea} from './PicModal.styled'

interface PicModalProps {
  onClose: () => void
  onDetailsClick: () => void
  open: boolean
  item: UnsplashDataProps
}

const PicModal = ({onClose, open, item, onDetailsClick}: PicModalProps) => {

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
    <ModalBkg onClick={onClose}/>
    <ModalContainer>
    <LrgCollectionCard item={item} download key={`modal_${item.id}`} close onDetailsClick={onDetailsClick}>
      <ModalImgArea 
        src={item.urls.regular} 
        alt={item.description}
      />
    </LrgCollectionCard>
    </ModalContainer>
    </>,
    document.getElementById('modal') as Element
  )
}

export default PicModal