import styled from 'styled-components/native'
import * as Animatable from 'react-native-animatable'

export const Container = styled.ScrollView`
  flex: 1;
`
export const Header = styled.View`
  height: 90px;
  margin-top: 14px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ImageLogo = styled.Image`
  height: 40px;
  width: 40px;
`

export const Title = styled.Text`
  font-family: 'Quicksand700';
  color: #177FA7;
  font-size: 38px;
`

export const DescriptionApp = styled.Text`
  text-align: center;
  font-family: 'Quicksand400';
  font-size: 12px;
  color: #177FA7;

  margin-top: 12px;
  margin-bottom: 30px;
`

export const ContainerAnimatableForCard = styled(Animatable.View)``

export const CardCategory = styled.TouchableOpacity`
  height: 180px;
  margin-bottom: 40px;
  border-radius: 20px;
`

export const CardImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 34px;
  font-family: 'Quicksand700'
`
