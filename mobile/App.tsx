/* eslint-disable camelcase */
import React from 'react'
import { useFonts } from 'expo-font'
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold
} from '@expo-google-fonts/quicksand'

import Routes from './src/routes'

export default function App () {
  const [fontsLoaded] = useFonts({
    Quicksand400: Quicksand_400Regular,
    Quicksand500: Quicksand_500Medium,
    Quicksand700: Quicksand_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return <Routes />
}
