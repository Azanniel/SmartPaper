import React, { useEffect, useState } from 'react'
import { View, ListRenderItem, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

import {
  Container, Header,
  Loading, GoBackButton, Title,
  ListWallpapersContainer, WallpaperContainer, WallpaperItem
} from './styles'

import unsplash from '../../services/unsplash/api'
import { RouteParamsProps, UnsplashPhotoProps } from './types'

const ListWallPapers = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const params = route.params as RouteParamsProps

  const [wallpapers, setWallpapers] = useState<UnsplashPhotoProps[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loadImages, setLoadImages] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const handleGoBackToInitialPage = () => {
    navigation.goBack()
  }

  const handleGoToWallpaper = (image: UnsplashPhotoProps) => {
    navigation.navigate('SetWallpaper', image)
  }

  const getImagesUnsplashForWallpapers = async (pageNumber = page, shouldRefresh = false) => {
    if (totalPages && page > totalPages) return

    setLoadImages(true)

    const response = await unsplash.search.photos(
      params.keyword,
      pageNumber, 5,
      { orientation: 'portrait', orderBy: 'relevant' }
    )

    const totalItems = response.headers.get('X-Total')
    setTotalPages(Math.floor(Number(totalItems) / 5))

    const { results: responseWallpapers } = await response.json()
    setWallpapers(
      shouldRefresh
        ? responseWallpapers
        : [...wallpapers, ...responseWallpapers]
    )
    setPage(page + 1)

    setLoadImages(false)
  }

  const renderItemForFlatListImage: ListRenderItem<UnsplashPhotoProps> = ({ item, index }) => {
    return (
      <WallpaperContainer onPress={() => handleGoToWallpaper(item)}>
        <WallpaperItem
          animation="fadeIn"
          duration={200}
          delay={index * (200 / 2)}
          useNativeDriver={true}
          source={{ uri: item.urls.thumb }}
        />
      </WallpaperContainer>
    )
  }

  const refreshListImages = async () => {
    setRefreshing(true)
    await getImagesUnsplashForWallpapers()
    setRefreshing(false)
  }

  useEffect(() => {
    getImagesUnsplashForWallpapers()
  }, [params.keyword])

  return (
    <Container>
      <Header>
        <GoBackButton onPress={handleGoBackToInitialPage}>
          <FontAwesome name="chevron-left" size={28} color="#177FA7" />
        </GoBackButton>

        <Title>{params.category}</Title>

        <View/>
      </Header>

      <ListWallpapersContainer>
        <FlatList
          keyExtractor={item => item.id}
          data={wallpapers}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onRefresh={refreshListImages}
          refreshing={refreshing}
          onEndReachedThreshold={0.1}
          onEndReached={() => getImagesUnsplashForWallpapers()}
          ListFooterComponent={loadImages ? <Loading /> : null}
          renderItem={renderItemForFlatListImage}
        />
      </ListWallpapersContainer>

    </Container>
  )
}

export default ListWallPapers
