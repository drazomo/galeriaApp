import { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { MosaicContainer, MosaicGrid } from './components/Mosaic/Mosaic.styled'
import MosaicTile from './components/Mosaic/MosaicTile'
import { fetchFotos, nextPage } from './features/feed'

const App = () => {
  const dispatch = useAppDispatch()
  const {data, page} = useAppSelector(state => state.feed)

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    dispatch(nextPage())
    dispatch(fetchFotos(page))
  }

  const breakpointColumnsObj = {
    default: 3,
    700: 2,
  };

  return (
    <>
      <MosaicContainer>
      <InfiniteScroll dataLength={data?.length} next={fetchImages} hasMore={true} loader={<></>}>
        <MosaicGrid>
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {
              data.map(img => (
                <MosaicTile image={img.urls.small as string} alt={img?.description} key={img.id}/>
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