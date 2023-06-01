import { BackHandler, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const MealItem = ({title, imageUrl, duration, complexcity, affordadility, ingredients, steps}) => {

  const navigation = useNavigation();
  function pressHandeler() {
    console.log("ingredients is "+ingredients)
    console.log("image is main "+imageUrl)
    console.log("steps is "+steps)

    navigation.navigate("MealDetails",
    {
      
      imageUrl :imageUrl,
      ingredients :ingredients,
      steps : steps,
      title : title
    })
  }
  return (
    <View style={styles.mealsItem}>
      <Pressable 
      style={({ pressed }) =>
       (pressed ? 
      styles.buttomPressed : null)}
      onPress={pressHandeler}>
        <View>
          <Image source={{uri: imageUrl}} style={styles.imageStyle}/>
      <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detalisItem}>{duration}m</Text>
        <Text style={styles.detalisItem}>{complexcity.toUpperCase()}</Text>
        <Text style={styles.detalisItem}>{affordadility.toUpperCase()}</Text>

      </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealsItem:{
    margin : 16,
    borderRadius :8,
    overflow : 'hidden',
    backgroundColor : 'white'
  },
  imageStyle:{
    height : 200,
    width: '100%'
  },
  title:{
    fontWeight :'bold',
    textAlign :'center',
    fontSize : 18,
    color :"red"
  },
  details:{
    flexDirection :'row',
    alignItems :'center',
    padding : 8,
    justifyContent :'center'
  },
  detalisItem :{
    marginHorizontal : 4,
    fontSize :12,
    color :'red',
  },
  buttonStyle: {
    flex: 1,
  },
  buttomPressed: {
    opacity: 0.5
  }
})