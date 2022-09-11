import React from 'react'
import { StatBox, StatCategory, StatContainer, StatNumber, UserInfoContainer, UserLink, UserName, UserPhoto } from './ImgAndUser.styled'

const ImgAndUser = () => {
  return (
    <UserInfoContainer>
      <UserPhoto />
      <UserName>Annie Spratt</UserName>
      <UserLink href="https://www.anniespratt.com/">https://www.anniespratt.com</UserLink>
      <StatContainer>
        <StatBox>
          <StatNumber>16.77k</StatNumber>
          <StatCategory>Photos</StatCategory>
        </StatBox>

        <StatBox>
          <StatNumber>16.77k</StatNumber>
          <StatCategory>Photos</StatCategory>
        </StatBox>

        <StatBox>
          <StatNumber>16.77k</StatNumber>
          <StatCategory>Photos</StatCategory>
        </StatBox>
      </StatContainer>
  </UserInfoContainer>
  )
}

export default ImgAndUser