import { useState } from 'react';
import { UnsplashDataProps } from '../../features/feed';
import PicModal from '../PicModal/PicModal';
import { MosaicBody } from './Mosaic.styled';

interface MosaicTileProps {
  image: string;
  alt?: string;
  item: UnsplashDataProps
}


const MosaicTile= ({ image, alt, item }: MosaicTileProps) => {
  const [modalOpen, setModalOpen] = useState(false)

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
      <PicModal key={item.id} item={item} onClose={closeModal} open={modalOpen}/>
      <MosaicBody onClick={handleOnClick}>
        <img src={image} alt={alt} />
      </MosaicBody>
    </>
  )
};

export default MosaicTile;
