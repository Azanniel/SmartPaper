import React, { useState } from 'react'
import { Alert, ToastAndroid } from 'react-native'
import { useRoute } from '@react-navigation/native'
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'

import {
  Container, ImageBackgroundContainer, ImageThumb, Loading,
  SetWallpaperButton, SetWallpaperContainer, SetWallpaperText
} from './styles'

import { UnsplashPhotoProps } from '../ListWallpapers/types'

const SetWallpaper = () => {
  const route = useRoute()
  const params = route.params as UnsplashPhotoProps

  const [opacity, setOpacity] = useState(0)
  const [disabled, setDisabled] = useState(true)

  const onLoadImage = () => {
    setOpacity(1)
    setDisabled(false)
  }

  const handleShareWallpaperPhone = async () => {
    setDisabled(true)

    ToastAndroid.showWithGravity(
      'Iniciando o download da imagem',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    )

    const { granted } = await MediaLibrary.requestPermissionsAsync()

    if (granted) {
      const fileUri = FileSystem.documentDirectory + params.id + 'smartpaper.png'

      try {
        const { uri } = await FileSystem.downloadAsync(params.urls.regular, fileUri)
        const asset = await MediaLibrary.createAssetAsync(uri)

        await MediaLibrary.createAlbumAsync('SmartPaper', asset, false)
        setDisabled(false)
        return Alert.alert('Sucesso!', 'Download concluído com sucesso. Vá até sua galeria de fotos no álbum SmartPaper')
      } catch (error) {
        console.error(error)
        setDisabled(false)
        return Alert.alert('Oops!', 'Não foi possível baixar o Wallpaper')
      }
    } else {
      setDisabled(false)
      return Alert.alert('Eita !', 'Precisamos da sua permissão para baixar o Wallpaper')
    }
  }

  return (
    <Container>
      <ImageThumb source={{ uri: params.urls.thumb }}>
        <Loading color="#177FA7" />
      </ImageThumb>

      <ImageBackgroundContainer
        source={{ uri: params.urls.regular }}
        resizeMode="cover"
        onLoad={onLoadImage}
        opacity={opacity}
      >
        <SetWallpaperButton>
          <SetWallpaperContainer
            onPress={handleShareWallpaperPhone}
            disabled={disabled}
          >
            {
              disabled ? (
                <Loading color="#fcfcfc" />
              ) : (
                <SetWallpaperText>Baixar wallpaper</SetWallpaperText>
              )
            }
          </SetWallpaperContainer>
        </SetWallpaperButton>
      </ImageBackgroundContainer>

    </Container>
  )
}

export default SetWallpaper
