import { MosaicBody } from './Mosaic.styled';

interface MosaicTileProps {
  image: string;
  alt?: string;
}


const MosaicTile= ({ image, alt }: MosaicTileProps) => {
  return (
    <MosaicBody >
      <img src={image} alt={alt} />
    </MosaicBody>
  )
};

export default MosaicTile;
