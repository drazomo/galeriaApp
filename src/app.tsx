import React, { useEffect, useState } from 'react'
import { CardCollectionContainer } from './components/Collection/Collection.styled'
import CollectionCard from './components/Collection/CollectionCards'
import { MosaicContainer, MosaicGrid } from './components/Mosaic/Mosaic.styled'
import MosaicTile from './components/Mosaic/MosaicTile'

const tester = ['add collection', 'cars', 'sports', 'vacations', 'food']

//mJ0Fo7arIE9bwe0i88zHw9auKzPSqvWZlRr2oV4j03w

interface ImgProperties {
  urls: {
    small: string;
  };
  id: string;
  description?: string;
}

const App = () => {
  const [images, setImages] = useState<ImgProperties[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`);
      const data = await res.json();
      setImages(data)
      console.log(data);
    }
    fetchImages();
  }, []);

  return (
    <>
      <CardCollectionContainer>
        {
          tester.map((cat) => (
            <CollectionCard catName={cat}/>
          ))
        }
      </CardCollectionContainer>
      <MosaicContainer>
        <MosaicGrid>
          {
            images?.map(img => (
              <MosaicTile image={img.urls.small} key={img.id} alt={img?.description} />
            ))
          }
        </MosaicGrid>
      </MosaicContainer>
      
    </>
  )
}

export default App