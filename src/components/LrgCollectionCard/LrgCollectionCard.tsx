import React, { useState } from 'react'
import { CollectionButtonBar, CollectionCardContainer, defaultImageContainerCSS, InfoBox, InfoUsrContainer, InfoUsrImg, LrgImgContainer } from './LrgCollectionCard.styled'
import { DownloadBtn, DownloadContainer } from '../PicModal/PicModal.styled';
import { UnsplashDataProps } from '../../features/feed';
import {ReactComponent as BrokenHeart} from '../../images/Iconly-Broken-Heart.5896217f.svg';
import {ReactComponent as Stared} from '../../images/Iconly-Filled-Star.ff1773db.svg';
import {ReactComponent as BrokenStar} from '../../images/Iconly-Broken-Star.3c2feada.svg';
import {ReactComponent as DetailDots} from '../../images/Icon-show-detail.08802497.svg';
import {ReactComponent as DownloadIcn} from '../../images/Icon-feather-download.f34f10a8.svg';
import {ReactComponent as CrossIcn} from '../../images/Icon-metro-cross.svg';

export interface LrgPicProps {
  item: UnsplashDataProps
  children: React.ReactNode
  download?: boolean
  restrict?: boolean
  portrait?: boolean
  close?: boolean
  onDetailsClick: () => void
}

const LrgCollectionCard = (props: LrgPicProps) => {
  const {item, children, download, close, onDetailsClick} = props 
  const [stared, setStared] = useState(false);

  return (
    <>
    <CollectionCardContainer>
      <InfoBox>
        <InfoUsrContainer>
          <InfoUsrImg 
            style={{backgroundImage: `url("${item.user.profile_image.large}")`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center'}} 
          />
         <div className='usrInfo'>
            <p>{item.user.username}</p>
            <p>12 hours ago</p>
          </div>
        </InfoUsrContainer>
        <div className='detailsDiv' onClick={onDetailsClick} style={{ cursor: 'pointer' }}>
          {close ? <CrossIcn />  : <DetailDots />}
        </div>
      </InfoBox>
      {item.description &&
        <div className='description'>
          <p>{item.description}</p>
        </div>
        }
      <LrgImgContainer
        imageContainerCSS={defaultImageContainerCSS}
      >
          {children}
      </LrgImgContainer>
      <CollectionButtonBar>
        <div className='likesDiv'>
        <BrokenHeart />
        <p>
        {item.likes}
        </p>
        </div>
        <div onClick={() => setStared(prevStared => !prevStared)} style={{ cursor: 'pointer' }}>
        {stared ? <Stared /> : <BrokenStar />}
        </div>
      </CollectionButtonBar>
      { download &&
      <DownloadContainer>
        <DownloadBtn href={item.links.download} target="_blank">
          <DownloadIcn/> <h3>Download</h3>
        </DownloadBtn>
      </DownloadContainer>
      }
    </CollectionCardContainer>
    </>
  )
}

export default LrgCollectionCard