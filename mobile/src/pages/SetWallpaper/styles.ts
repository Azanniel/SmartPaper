import styled from 'styled-components/native'

interface ImageBackgroundContainerProps {
  opacity: number;
}

export const Container = styled.View`
  flex: 1;
`

export const ImageBackgroundContainer = styled.ImageBackground<ImageBackgroundContainerProps>`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  ${props => props.opacity && `
      opacity: ${props.opacity}
  `}
`

export const ImageThumb = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large'
})``

export const SetWallpaperButton = styled.View.attrs({
  elevation: 3
})`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background-color: #177FA7;
  border-radius: 20px;
  height: 56px;
`

export const SetWallpaperContainer = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`

export const SetWallpaperText = styled.Text`
  color: #fff;
  font-family: 'Quicksand700';
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 16px;
`
