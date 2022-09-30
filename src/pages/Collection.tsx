import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'
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
  const ref = React.createRef<LoadingBarRef>()
  const dispatch = useAppDispatch()
  const { data, page, detail, isLoading, hasError } = useAppSelector(state => state.collection)
  const { id } = useParams<keyof ParamsInterface>() as ParamsInterface
  const hasData = !!data.length && !hasError && !!detail

  useEffect(() => {
    if(page !== 1){
      dispatch(fetchCollection({id, page}))
    }
  }, [page])

  useEffect(() => {
    const loadingBar = ref.current
    if(loadingBar) {
      (isLoading) ? loadingBar.continuousStart() : loadingBar.complete()
    }

    return () => {
      (loadingBar as LoadingBarRef).complete()
    }
  }, [isLoading, ref])

  useEffect(() => {
    dispatch(fetchCollection({id, page: 1}))
    dispatch(fetchCollectionDetail(id))
  }, [])

  const nextFn = async () => {
    dispatch(nextPage())
  }

  return (
    <>
      <LoadingBar color='#f11946' ref={ref} shadow={true} />
      {hasData && (
      <Container>
      <CollectionDetails item={detail} />
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
              hover
            />
          ))}
        </Grid>
      </InfiniteScroll>
      </Container>
      )}
      {isLoading && <HashLoader />}
    </>
  )
}

export default Collection