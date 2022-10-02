import { useState } from 'react';
import { UnsplashDataProps } from '../../features/feed';
import PicModal from '../PicModal/PicModal';
import { MosaicBody, MosaicDiv } from './Mosaic.styled';

interface MosaicTileProps {
  image: string;
  alt?: string;
  item: UnsplashDataProps
}


const MosaicTile= ({ image, alt, item }: MosaicTileProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [opacity, setOpacity] = useState(1)

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOnClick = () => {
    showModal();
  }

  return (
    <>
    <MosaicDiv key={item.id} opacity={opacity} placeholderColor={item.color as string}>
      <PicModal item={item} onClose={closeModal} open={modalOpen}/>
      <MosaicBody onClick={handleOnClick}>
        <img src={image} alt={alt} onLoad={() => setOpacity(0)}/>
      </MosaicBody>
    </MosaicDiv>
    </>
  )
};

export default MosaicTile;
