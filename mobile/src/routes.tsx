import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import Initial from './pages/Initial'
import ListWallpapers from './pages/ListWallpapers'
import SetWallpaper from './pages/SetWallpaper'

const { Navigator, Screen } = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: {
          backgroundColor: '#fff'
        }
      }} >

        <Screen name="Initial" component={Initial} />

        <Screen name="ListWallpapers" component={ListWallpapers} />

        <Screen name="SetWallpaper" component={SetWallpaper} />

      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
