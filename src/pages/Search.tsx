import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import CollectionCard from '../components/Collection/CollectionCards'
import ExploreImage from '../components/ExploreImage'
import { Container } from '../components/ExploreImage/ExploreImage.styled'
import FilterHeader from '../components/FilterHeader'
import { LinkBtn, LinkItem } from '../components/FilterHeader/FilterHeader.styled'
import Loader from '../components/Loader'
import { Grid } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { incrementCollectionPage, incrementPhotoPage, queryCollectionsSearch, queryPhotosSearch } from '../features/searchResults'

interface ParamsInterface {
  query: string
}

const filterOptions = ['Photos', 'Collections']

const Search = () => {
  const ref = React.createRef<LoadingBarRef>()
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const { collectionPage, photoPage, photoResults, collectionResults, photoDetails, collectionDetails, isLoading, hasError } = useAppSelector(state => state.searchResults)
  const [checked, setChecked] = useState('photos')
  const { query } = useParams<keyof ParamsInterface>() as ParamsInterface
  const hasPhotosData = !!photoResults.length && !hasError && !!photoDetails
  const hasCollectionsData = !!collectionResults.length && !hasError && !!collectionDetails

  useEffect(() => {
    if(checked === 'photos'){
      dispatch(queryPhotosSearch({query, page: photoPage }))
    } else {
      dispatch(queryCollectionsSearch({query, page: collectionPage }))
    }
  }, [photoPage, collectionPage, query, checked])

  useEffect(() => {
    const loadingBar = ref.current
    if(loadingBar) {
      (isLoading) ? loadingBar.continuousStart() : loadingBar.complete()
    }

    return () => {
      (loadingBar as LoadingBarRef).complete()
    }
  }, [isLoading, ref])

  const collections = (
  <>
  {hasCollectionsData && (
  <InfiniteScroll 
  dataLength={collectionResults.length}
  hasMore={collectionPage <= collectionDetails.total_pages}
  next={() => dispatch(incrementCollectionPage())}
  loader={<></>}
  >
  <Grid>
    {collectionResults.map(option => (
      <CollectionCard catName={option.title as string} imgUrl={option.preview_photos[0].urls.regular} id={option.id} />
    ))}
  </Grid>
  </InfiniteScroll>
  )}
  {isLoading && <Loader />}
  </>
  )

  const photos = (
  <>
  {hasPhotosData && (
  <InfiniteScroll 
  dataLength={photoResults.length}
  hasMore={photoPage <= photoDetails.total_pages}
  next={() => dispatch(incrementPhotoPage())}
  loader={<></>}
  >
  <Grid>
    {photoResults.map(foto =>{ 
      return <ExploreImage
        key={`${foto.id}_gridSearchCollection`}
        item={foto}
        grid
      />
    })}
  </Grid>
  </InfiniteScroll>
  )}
  {isLoading && <Loader />}
  </>
  )

  const handleLinkBtnClick = (value: string) => {
    setChecked(value);
  };

  return (
    <>
    <LoadingBar color='#f11946' ref={ref} shadow={true} />
    <Container>
      <FilterHeader title={`${query.toLowerCase()} photos & collections`}>
        {
          filterOptions.map(option => (
            <LinkItem key={`filterSaved_${option}`}>
              <input 
              type='radio' 
              name='toggle_nav_pages' 
              value={option.toLowerCase()} 
              id={option.toLowerCase()} 
              checked={checked === option.toLowerCase() && true}
              />
              <LinkBtn onClick={() => handleLinkBtnClick(option.toLowerCase())}>
                {option}
              </LinkBtn>
            </LinkItem>
            ))
          }
      </FilterHeader>
    </Container>
    <Container>
    {
      checked === 'photos' ? photos : collections
    }
    </Container>
    {hasError && nav('/error')}
    </>
  )
}

export default Search