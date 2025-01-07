
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View className='flex-1 justify-center items-center color-white font-bold text-lg'>
      <Text>DreamDecor</Text>
      <Link href="/profile" style={{ color: 'blue' }}>Go to the login page</Link> 
      </View>
  )
}

export default RootLayout

