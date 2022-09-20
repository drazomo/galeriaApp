import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import CollectionDetails from '../components/CollectionDetails'
import ExploreImage from '../components/ExploreImage'
import { Container } from '../components/ExploreImage/ExploreImage.styled'
import { Grid } from '../components/LrgCollectionCard/LrgCollectionCard.styled'
import { fetchCollection, fetchCollectionDetail } from '../features/collection'
import { nextPage } from '../features/collection'
import { UnsplashDataProps } from '../features/feed'

interface ParamsInterface {
  id: string
}

const Collection = () => {
  const dispatch = useAppDispatch()
  const { data, page, detail } = useAppSelector(state => state.collection)
  const { id } = useParams<keyof ParamsInterface>() as ParamsInterface

  useEffect(() => {
    if(page !== 1){
      dispatch(fetchCollection({id, page}))
    }
  }, [page])

  useEffect(() => {
    dispatch(fetchCollection({id, page: 1}))
    dispatch(fetchCollectionDetail(id))
  }, [])

  const nextFn = async () => {
    dispatch(nextPage())
  }

  return (
    <>
      <Container>
      <CollectionDetails />
      <InfiniteScroll 
        dataLength={(data as UnsplashDataProps[])?.length}
        hasMore={data.length < detail.total_photos}
        next={nextFn}
        loader={<></>}
      >
        <Grid>
          {(data as UnsplashDataProps[]).map(foto => (
            <ExploreImage
              key={`${foto.id}_gridCollection`}
              item={foto}
              grid
            />
          ))}
        </Grid>
      </InfiniteScroll>
      </Container>
    </>
  )
}

export default Collection