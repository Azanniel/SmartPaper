import styled from 'styled-components/native'
import * as Animatable from 'react-native-animatable'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px;
`

export const Header = styled.View`
  margin-top: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Loading = styled.ActivityIndicator.attrs({
  color: '#177FA7',
  size: 'large'
})`
  margin: 50px 0;
`

export const GoBackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: 'Quicksand500';
  color: #177FA7;
  letter-spacing: 2px;
  font-size: 32px;
  margin-left: -30px;
`
export const ListWallpapersContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: 40px;
`

export const WallpaperContainer = styled.TouchableOpacity`
  height: 260px;
  border-radius: 20px;

  margin: 10px;

  align-items: center;
  flex-grow: 1;
  flex-basis: 0;

  background-color: #99999988;
`

export const WallpaperItem = styled(Animatable.Image)`
  width: 100%;
  height: 260px;
  border-radius: 20px;
`
