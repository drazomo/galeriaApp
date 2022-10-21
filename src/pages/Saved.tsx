import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import CollectionCard from '../components/Collection/CollectionCards'
import { Container } from '../components/ExploreImage/ExploreImage.styled'
import FilterHeader from '../components/FilterHeader'
import { LinkBtn, LinkItem } from '../components/FilterHeader/FilterHeader.styled'
import { Grid, ImagePlaceholder, ImgGridArea, ImgGridDiv, Overlay, SavedGridCollections } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import PicModal from '../components/PicModal/PicModal'
import { fetchSavedCollections } from '../features/clientSaved'
import { UnsplashDataProps } from '../features/feed'
import { CollectionCardProps } from '../features/showcaseFeed'

const filterOptions = ['Photos', 'Collections']

const Saved = () => {
  const dispatch = useAppDispatch()
  const { selectedCollections, selectedPhotos } = useAppSelector(state => state.clientSaved)
  const [checked, setChecked] = useState('photos')
  const [modalOpen, setModalOpen] = useState(false)
  const [opacity, setOpacity] = useState(1);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSavedCollections())
  }, [checked, dispatch])

  const filteredCollections = (Object.values(selectedCollections) as CollectionCardProps[]).map(option => (
    <CollectionCard catName={option.title as string} imgUrl={option.preview_photos[0].urls.regular} id={option.id} key={option.id + 'colCard' + Math.random()}/>
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
          checked === 'photos' ? 
          <Grid>
            {(Object.values(selectedPhotos) as UnsplashDataProps[]).map(foto => (
            <>
            <PicModal item={foto} onClose={closeModal} open={modalOpen}/>
            <ImgGridDiv hoverEffect={true} key={`xloprGrid_${foto.id}`} onClick={showModal}>
            <ImagePlaceholder opacity={opacity} placeholderColor={foto.color as string}/>
              <Overlay>
                <p>
                  {foto.likes} likes
                </p>
              </Overlay>
              <ImgGridArea
                src={foto.urls.regular}
                alt={foto.description}
                imageCSS={{objectFit: 'cover'}}
                onLoad={() => setOpacity(0)}
              />
            </ImgGridDiv>
            </>
          ))}
          </Grid> 
          : 
          <SavedGridCollections>{filteredCollections}</SavedGridCollections>
        }
      </Container>
    </Container>
    </>
  )
}

export default Saved