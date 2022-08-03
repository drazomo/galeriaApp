import React from 'react';
import { MosaicBody } from './Mosaic.styled';

interface MosaicTileProps {
  image: string;
  alt?: string;
}

{/* 
const MosaicTile: React.ForwardRefExoticComponent<MosaicTileProps> = React.forwardRef(({ image, alt }, ref: React.Ref<HTMLDivElement>) => {
  return (
    <MosaicBody ref={ref}>
      <img src={image} alt={alt} />
    </MosaicBody>
  )
});
*/}


const MosaicTile= ({ image, alt }: MosaicTileProps) => {
  return (
    <MosaicBody >
      <img src={image} alt={alt} />
    </MosaicBody>
  )
};

export default MosaicTile;
