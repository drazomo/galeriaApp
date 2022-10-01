import React, { useEffect, useState } from 'react'
import {ReactComponent as BrokenHeart} from '../../images/Iconly-Broken-Heart.5896217f.svg';
import {ReactComponent as Stared} from '../../images/Iconly-Filled-Star.ff1773db.svg';
import {ReactComponent as BrokenStar} from '../../images/Iconly-Broken-Star.3c2feada.svg';
import {ReactComponent as DetailDots} from '../../images/Icon-show-detail.08802497.svg';
import {ReactComponent as DownloadIcn} from '../../images/Icon-feather-download.f34f10a8.svg';
import {ReactComponent as CloseIcn} from '../../images/Icon-metro-cross.svg';
import { CollectionButtonBar, CollectionCardContainer, defaultImageContainerCSS, InfoBox, InfoUsrContainer, InfoUsrImg, LrgImgContainer } from './LrgCollectionCard.styled'
import { DownloadBtn, DownloadContainer } from '../PicModal/PicModal.styled';
import { UnsplashDataProps } from '../../features/feed';
import { useAppDispatch } from '../../app/hooks';
import { fetchSavedCollections, removeCollection, saveCollection } from '../../features/clientSaved';
import { collectionExistInLocalStorage, SAVED_IMGS } from '../../utils';

export interface LrgPicProps {
  item: UnsplashDataProps
  children: React.ReactNode
  download?: boolean
  close?: boolean
  crossOnClick?: () => void
}

const LrgCollectionCard = (props: LrgPicProps) => {
  const dispatch = useAppDispatch()
  const {item, children, download} = props 
  const [stared, setStared] = useState(false)

  useEffect(() => {
    dispatch(fetchSavedCollections())
    setStared(collectionExistInLocalStorage({id: item.id, savedType: SAVED_IMGS}))
  }, [dispatch, stared, item.id])

  const handleStarClick = (item: UnsplashDataProps) => {
    setStared(prevStared => !prevStared)
    stared ? dispatch(removeCollection({id: item.id, type: 'photo'})) : dispatch(saveCollection({...item, type: 'photo'}))
  }

  return (
    <>
    <CollectionCardContainer>
      <InfoBox>
        <InfoUsrContainer href={`/user/${item.user.username}`}>
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
        <div className='detailsDiv'>
          {props.close ? <CloseIcn onClick={props.crossOnClick}/> : <DetailDots />}
        </div>
      </InfoBox>
      {item.description &&
        <div className='description'>
          <p>{item.description}</p>
        </div>
        }
      <LrgImgContainer imageContainerCSS={defaultImageContainerCSS}>
          {children}
      </LrgImgContainer>
      <CollectionButtonBar>
        <div className='likesDiv'>
        <BrokenHeart />
        <p>
        {item.likes}
        </p>
        </div>
        <div onClick={() => handleStarClick(item)} style={{ cursor: 'pointer' }}>
        {stared ? <Stared /> : <BrokenStar />}
        </div>
      </CollectionButtonBar>
      { download &&
      <DownloadContainer>
        <DownloadBtn>
          <DownloadIcn/> <h3>Download</h3>
        </DownloadBtn>
      </DownloadContainer>
      }
    </CollectionCardContainer>
    </>
  )
}

export default LrgCollectionCard