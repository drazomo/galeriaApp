import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import CollectionCard from '../components/Collection/CollectionCards'
import ExploreImage from '../components/ExploreImage'
import { Container } from '../components/ExploreImage/ExploreImage.styled'
import FilterHeader from '../components/FilterHeader'
import { LinkBtn, LinkItem } from '../components/FilterHeader/FilterHeader.styled'
import { Grid } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { queryCollectionsSearch, queryPhotosSearch } from '../features/searchResults'

interface ParamsInterface {
  query: string
}

const filterOptions = ['Photos', 'Collections']

const Search = () => {
  const dispatch = useAppDispatch()
  const { collectionPage, photoPage, photoResults, collectionResults } = useAppSelector(state => state.searchResults)
  const [checked, setChecked] = useState('photos')
  const { query } = useParams<keyof ParamsInterface>() as ParamsInterface

  useEffect(() => {
    if(query !== '') {
      dispatch(queryCollectionsSearch({query, page: collectionPage }))
      dispatch(queryPhotosSearch({query, page: photoPage }))
    }
  }, [])

  const photos = photoResults.results && (photoResults.results).map(foto =>{ 
    return <ExploreImage
      key={`${foto.id}_gridSearchCollection`}
      item={foto}
      grid
    />
  })

  const collections = collectionResults.results && (collectionResults.results).map(option => (
    <CollectionCard catName={option.title as string} imgUrl={option.preview_photos[0].urls.regular} id={option.id} />
  ))


  
  const handleLinkBtnClick = (value: string) => {
    setChecked(value);
  };

  return (
    <>
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
      <Grid>
        {
          checked === 'photos' ? photos : collections
        }
      </Grid>
    </Container>
    </>
  )
}

export default Search