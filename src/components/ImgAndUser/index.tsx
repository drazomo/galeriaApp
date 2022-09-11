import React from 'react'
import { UnsplashUsrDataProps } from '../../features/userFeed'
import { StatBox, StatCategory, StatContainer, StatNumber, UserInfoContainer, UserLink, UserName, UserPhoto } from './ImgAndUser.styled'

interface ImgAndUserProps {
  item: UnsplashUsrDataProps
}

const ImgAndUser = ({item} : ImgAndUserProps) => {
  const stats = [{Posts : item.total_photos}, {Followers: item.followers_count}, {Following: item.following_count}]

  return (
    <UserInfoContainer>
      <UserPhoto src={item.profile_image.large}/>
      <UserName>{`${item.name}`}</UserName>
      <UserLink href={item.portfolio_url} >{item.portfolio_url}</UserLink>
      <StatContainer>
        {
          stats.map((stat, idx) => (
            <StatBox key={`stat_${Object.keys(stat)}${idx}`}>
              <StatNumber>{ Object.values(stat) }</StatNumber>
              <StatCategory>
                { Object.keys(stat) }
              </StatCategory>
            </StatBox>
          ))
        }
      </StatContainer>
  </UserInfoContainer>
  )
}

export default ImgAndUser