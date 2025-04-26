import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const CScreen = () => {
  return (
    <View>
      <Text>C</Text>
      <Button title="Go to A" on press={()=> {console.log("Pantalla A")}}/>
    </View>
  )
}

export default CScreen

const styles = StyleSheet.create({})
