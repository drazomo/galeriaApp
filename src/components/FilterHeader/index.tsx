import React from 'react'
import { FilterControls, LinksContainer } from './FilterHeader.styled'

interface FilterHeaderProps {
  title: string
  children: React.ReactNode
}

const FilterHeader = ({title, children}: FilterHeaderProps) => {
  return (
    <FilterControls>
        <div>
          <h5>{title}</h5>
        </div>
        <LinksContainer>
          {children}
        </LinksContainer>
    </FilterControls>
  )
}

export default FilterHeader