import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const AScreen = (navigation) => {
  return (
    <View>
      <Text>A</Text>
      <Button title="Go to B" on press={()=> {navigation.navigate("B")}}/>
    </View>
  )
}

export default AScreen

const styles = StyleSheet.create({})
