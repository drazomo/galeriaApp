import React, { useEffect, useState } from 'react'
import { CardCollectionContainer } from './components/Collection/Collection.styled'
import CollectionCard from './components/Collection/CollectionCards'
import { MosaicContainer, MosaicGrid } from './components/Mosaic/Mosaic.styled'
import MosaicTile from './components/Mosaic/MosaicTile'
import InfiniteScroll from 'react-infinite-scroll-component'

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
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=${page}`);
    const data = await res.json();
    setImages([...images, ...data])
    setPage(page + 1);
  }

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
        <InfiniteScroll dataLength={images?.length} next={fetchImages} hasMore={true} loader={<></>}>
          <MosaicGrid>
            {
              images?.map(img => (
                <>
                <MosaicTile image={img.urls.small} key={img.id} alt={img?.description} />
                </>
              ))
            }
          </MosaicGrid>
        </InfiniteScroll>
      </MosaicContainer>
      
    </>
  )
}

export default App