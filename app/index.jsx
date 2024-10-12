import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../components/ScreenWrapper'
import Button from '../components/Button'
import { Text } from 'react-native'
import Loading from '../components/Loading'

const index = () => {
  const router = useRouter()
  return (
    <View style ={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Loading/>
    </View>
  )
}

export default index