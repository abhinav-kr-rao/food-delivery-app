import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const signup = () => {
  return (
    <View>
      <Text>signup</Text>
       <Button title='Sign in' onPress={() => (router.push("/signin"))} />
    </View>
  )
}

export default signup