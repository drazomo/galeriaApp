import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'
import { CardCollectionContainer } from './components/Collection/Collection.styled'
import CollectionCard from './components/Collection/CollectionCards'
import { MosaicContainer, MosaicGrid } from './components/Mosaic/Mosaic.styled'
import MosaicTile from './components/Mosaic/MosaicTile'

const tester = ['add collection', 'cars', 'sports', 'vacations', 'food']

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
    setImages(prevImages => [...prevImages, ...data])
    setPage(page + 1);
  }

  const breakpointColumnsObj = {
    default: 3,
    700: 2,
  };

  return (
    <>
      <CardCollectionContainer>
        {
          tester.map((cat) => (
            <CollectionCard catName={cat} key={`collection_${cat}`}/>
          ))
        }
      </CardCollectionContainer>

      <MosaicContainer>
      <InfiniteScroll dataLength={images?.length} next={fetchImages} hasMore={true} loader={<></>}>
        <MosaicGrid>
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {
              images?.map(img => (
                <MosaicTile image={img.urls.small} alt={img?.description} key={img.id}/>
              ))
            }
          </Masonry>
        </MosaicGrid>
      </InfiniteScroll>
      </MosaicContainer>
    </>
  )
}

export default App