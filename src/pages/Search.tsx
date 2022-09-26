import React, { useState } from 'react'
import { Container } from '../components/ExploreImage/ExploreImage.styled'
import FilterHeader from '../components/FilterHeader'
import { LinkBtn, LinkItem } from '../components/FilterHeader/FilterHeader.styled'
import { Grid } from '../components/LrgCollectionCard/LrgCollectionCard.styled'

const filterOptions = ['Photos', 'Collections']

const Search = () => {
  const [checked, setChecked] = useState('photos')
  
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
    </Container>
    <Container>
      <Grid>
        {
          checked === 'photos' ? 'photos' : 'collections'
        }
      </Grid>
    </Container>
    </>
  )
}

export default Search