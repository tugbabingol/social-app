import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Icon from '../assets/icons'
import { StatusBar } from 'react-native-web'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'

const Login = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <StatusBar style="dark"/>
      <View style={styles.container}>
        <BackButton router={router}/>
        {/* welcome */}
        <View>

        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:45,
    paddingHorizontal: wp(5)
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight:theme.fonts.bold,
    color:theme.colors.text
  },
  form:{
    gap:25
  },
  forgotPassword:{
    textAlign:'right',
    fontWeight:theme.fonts.semibold,
    color:theme.colors.text
  },
  footer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:5,
  },
  footerText:{
    textAlign:'center',
    color:theme.colors.text,
    fontSize:hp(1.6)
  }
})