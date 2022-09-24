import React, { useState } from 'react'
import { Container } from '../../components/ExploreImage/ExploreImage.styled'
import { LinksContainer, LinkItem, SavedControls, LinkBtn } from './Saved.styled'

const filterOptions = ['All', 'Photos', 'Collections']

const Saved = () => {
  const [checked, setChecked] = useState('')

  const handleLinkBtnClick = (value: string) => {
    setChecked(value);
  };

  return (
    <>
    <Container>
      <SavedControls>
        <div>
          <h5>Saved photos & collections</h5>
        </div>
        <LinksContainer>
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
        </LinksContainer>
      </SavedControls>
      
    </Container>
    </>
  )
}

export default Saved