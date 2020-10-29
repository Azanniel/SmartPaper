import React from 'react'
import { Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Container, Header, ImageLogo,
  Title, DescriptionApp,
  ContainerAnimatableForCard, CardCategory, CardImageBackground, CardTitle
} from './styles'

import Logo from '../../images/Logo.png'
import categories from './preset'

const Initial = () => {
  const navigation = useNavigation()

  const handleNavigateToListPhotos = (keyword: string, category: string) => {
    navigation.navigate('ListWallpapers', { keyword, category })
  }

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 24 }}
    >
      <Header>
        <ImageLogo resizeMode="contain" source={Logo} />
        <Title>SmartPapers</Title>
      </Header>

      <DescriptionApp
        onPress={() => Linking.openURL('https://github.com/Azanniel')}
      >
        Criado por Leandro Azanniel
      </DescriptionApp>

      {
        categories.map((category, index) => {
          return (
            <ContainerAnimatableForCard
              key={category.id}
              animation="fadeInUp"
              duration={700}
              delay={index * (700 / 2)}
              useNativeDriver={true}
            >
              <CardCategory onPress={() => handleNavigateToListPhotos(category.keyword, category.name)}>
                <CardImageBackground
                  resizeMode="cover"
                  imageStyle={{ borderRadius: 20 }}
                  source={category.uri}
                >
                  <CardTitle>{category.name}</CardTitle>
                </CardImageBackground>
              </CardCategory>
            </ContainerAnimatableForCard>
          )
        })
      }

    </Container>
  )
}

export default Initial
