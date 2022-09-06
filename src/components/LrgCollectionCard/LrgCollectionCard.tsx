import React, { useState } from 'react'
import {ReactComponent as BrokenHeart} from '../../images/Iconly-Broken-Heart.5896217f.svg';
import {ReactComponent as Stared} from '../../images/Iconly-Filled-Star.ff1773db.svg';
import {ReactComponent as BrokenStar} from '../../images/Iconly-Broken-Star.3c2feada.svg';
import {ReactComponent as DetailDots} from '../../images/Icon-show-detail.08802497.svg'
import { CollectionButtonBar, CollectionCardContainer, InfoBox, InfoUsrContainer, InfoUsrImg, LrgImgContainer } from './LrgCollectionCard.styled'

export interface LrgPicProps {
  id?: string,
  user: string,
  profileLink: string,
  children: React.ReactNode,
  description?: string,
  likes: number,
  perfilImgUrl: string
}

const LrgCollectionCard = ({user, profileLink, description, likes, children, perfilImgUrl}: LrgPicProps) => {
  const [stared, setStared] = useState(false);

  return (
    <CollectionCardContainer>
      <InfoBox>
        <InfoUsrContainer>
          <InfoUsrImg style={{backgroundImage: `url("${perfilImgUrl}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
          <div className='usrInfo'>
            <p>{user}</p>
            <p>12 hours ago</p>
          </div>
        </InfoUsrContainer>
        <div className='detailsDiv'>
          <DetailDots />
        </div>
      </InfoBox>
      {description &&
        <div className='description'>
          <p>{description}</p>
        </div>
        }
      <LrgImgContainer>
          {children}
      </LrgImgContainer>
      <CollectionButtonBar>
        <div className='likesDiv'>
        <BrokenHeart />
        <p>
        {likes}
        </p>
        </div>
        <div onClick={() => setStared(prevStared => !prevStared)} style={{ cursor: 'pointer' }}>
        {stared ? <Stared /> : <BrokenStar />}
        </div>
      </CollectionButtonBar>
    </CollectionCardContainer>
  )
}

export default LrgCollectionCard