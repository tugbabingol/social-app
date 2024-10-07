import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../components/ScreenWrapper'
import Button from '../components/Button'
import { Text } from 'react-native'

const index = () => {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="welcome" onPress={()=> router.push('welcome')}/>
    </ScreenWrapper>
  )
}

export default index