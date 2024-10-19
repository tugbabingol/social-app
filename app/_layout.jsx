
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { getUserData } from '../services/userService'

const _layout = ()=>{
  return (
    <AuthProvider>
      <MainLayout/>
    </AuthProvider>
  )
}

const MainLayout = () => {

  const {setAuth, setUserData} = useAuth();
  const router = useRouter();

  useEffect(()=>{
    supabase.auth.onAuthStateChange((_event, session) => {
      //console.log('session user : ', session?.user?.id);

      if(session){
        //set auth
        setAuth(session?.user);
        //update user
        updateUserData(session?.user, session?.user?.email);
        //console.log('auth user: ', session?.user?.email);
        //move to home screen
        router.replace('/home');
      }else{
        //set auth null
        setAuth(null);
        //move to welcome screen
        router.replace('/welcome');
      }
    })
  },[]);

  const updateUserData = async (user, email)=>{
    let res = await getUserData(user?.id);
    if (res.success) setUserData({...res.data, email});
  }
  return (
    <Stack 
        screenOptions={{
            headerShown: false
        }}
    />
  )
}

export default _layout