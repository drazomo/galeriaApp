import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import CollectionCard from '../components/Collection/CollectionCards'
import ExploreImage from '../components/ExploreImage'
import { Container } from '../components/ExploreImage/ExploreImage.styled'
import FilterHeader from '../components/FilterHeader'
import { LinkBtn, LinkItem } from '../components/FilterHeader/FilterHeader.styled'
import { Grid, SavedGridCollections } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { fetchSavedCollections } from '../features/clientSaved'
import { UnsplashDataProps } from '../features/feed'
import { CollectionCardProps } from '../features/showcaseFeed'

const filterOptions = ['Photos', 'Collections']

const Saved = () => {
  const dispatch = useAppDispatch()
  const { selectedCollections, selectedPhotos } = useAppSelector(state => state.clientSaved)
  const [checked, setChecked] = useState('photos')

  useEffect(() => {
    dispatch(fetchSavedCollections())
  }, [checked, dispatch])

  const filteredCollections = (Object.values(selectedCollections) as CollectionCardProps[]).map(option => (
    <CollectionCard catName={option.title as string} imgUrl={option.preview_photos[0].urls.regular} id={option.id} key={option.id + 'colCard' + Math.random()}/>
  ))

  const filteredPhotos = (Object.values(selectedPhotos) as UnsplashDataProps[]).map(foto => (
    <ExploreImage
      key={`${foto.id}_gridSavedCollection_${Math.random()}`}
      item={foto}
      grid
    />
  ))

  const handleLinkBtnClick = (value: string) => {
    setChecked(value);
  };

  return (
    <>
    <Container>
      <FilterHeader title='Saved photos & collections'>
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
      <Container>
        {
          checked === 'photos' ? <Grid>{filteredPhotos}</Grid> : <SavedGridCollections>{filteredCollections}</SavedGridCollections>
        }
      </Container>
    </Container>
    </>
  )
}

export default Saved