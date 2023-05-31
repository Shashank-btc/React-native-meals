import { StyleSheet, Text, View } from 'react-native'


const MealItem = ({title}) => {
  return (
    <View>
      <Text style={{color :"red"}}>{title}</Text>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({})